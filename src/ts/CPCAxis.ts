import * as $ from "jquery";
import * as d3 from "d3";
import * as cpc from "./Dataset";
import * as xxx from "./Dataset";
import {Type} from "./Dataset";
import {CPCChoice} from "./CPCChoice";
import {CPC} from "./CPC";
import {CPCNode} from "./CPCNode";

export class CPCAxis extends CPCNode {

    private static ORDER_INDEX: number = 0;

    private padding = 10;

    private type: cpc.Type;
    private label: string;
    private default: string;
    private range: cpc.Range;
    private weight: number;
    private threshold: number;
    private background: string;
    private x: number;
    private y_max: number;
    private y_min: number;
    private y_origin: number;
    private order: number;
    private editable: boolean;
    private width: number;

    private choices: Array<CPCChoice>;

    constructor(private cpc: CPC, parent: CPCChoice, axis: cpc.Axis) {
        super(parent);
        this.id = axis.id;
        this.type = axis.type;
        this.label = axis.label;
        this.default = axis.default;
        this.range = axis.range;
        if(this.range) {
            if(this.range.min == this.range.max) {
                const singleValue = this.range.min;
                this.range.min = CPC.guessMinimum(singleValue);
                this.range.max = CPC.guessMaximum(singleValue);
            }
            this.range.min = CPC.round(this.range.min, this.cpc.getPreferredPrecision());
            this.range.max = CPC.round(this.range.max, this.cpc.getPreferredPrecision());
        }
        this.weight = axis.weight == null ? 1 : axis.weight;
        this.threshold = axis.threshold;
        if(this.threshold && this.range) {
            if(this.range.max > this.range.min) {
                this.range.min = Math.min(this.range.min, this.threshold);
                this.range.max = Math.max(this.range.max, this.threshold);
            }
            else {
                this.range.min = Math.max(this.range.min, this.threshold);
                this.range.max = Math.min(this.range.max, this.threshold);
            }
        }
        this.background = axis.background;
        this.order = CPCAxis.ORDER_INDEX++;
        this.editable = axis.editable == undefined ? true : axis.editable;

        if (axis.choices) {
            this.choices = new Array<CPCChoice>();
            for (let choice of axis.choices) {
                this.choices.push(new CPCChoice(this.cpc, this, choice));
            }
        }
    }

    getId = (): string => {
        return this.id;
    };

    isNumerical = (): boolean => {
        return this.type == Type.NUMERICAL;
    };

    isCategorical = (): boolean => {
        return this.type == Type.CATEGORICAL;
    };

    getOrder = (): number => {
        return this.order;
    };

    getType = (): cpc.Type => {
        return this.type;
    };

    getX = (): number => {
        return this.x;
    };

    getY = (value: string): number => {
        return this.y_origin + this.y_min + (this.range.max - Number(value)) / (this.range.max - this.range.min) * (this.y_max - this.y_min);
    };

    getWidth = (): number => {
        return this.width;
    };

    getValueForY = (y: number): number => {
        return (1 - (y - this.y_min) / (this.y_max - this.y_min)) * (this.range.max - this.range.min) + this.range.min;
    };

    getWWeight = (): number => {
        if (this.type == Type.NUMERICAL) {
            return this.weight;
        } else {
            let max = 0;
            for (let choice of this.choices) {
                max = Math.max(max, choice.getWWeight());
            }
            return Math.max(this.weight, max);
        }
    };

    getHWeight = (): number => {
        if (this.type == Type.NUMERICAL) {
            return 5;
        } else {
            let sum = 0;
            for (let choice of this.choices) {
                sum += choice.getHWeight()
            }
            return sum;
        }
    };

    onMouseMove = (event): void => {
        if (!this.editable) {
            return;
        }
        let y: number = event.pageY - $("#" + this.id).offset().top;
        if (y < this.y_min || y > this.y_max) {
            return;
        }
        if (this.isNumerical() && this.cpc.isEditing()) {
            this.cpc.showTooltip();
            this.cpc.setTooltipX(this.x + 10);
            this.cpc.setTooltipY(this.y_origin + y);
            let value = this.getValueForY(y);
            this.cpc.setTooltipHTML("<b>" + value.toFixed(5) + "</b>");

            // selection already in path
            let selection: cpc.Selection = this.cpc.findEditDataSelection(this.id);
            if (selection) {
                selection.value = String(value);
                this.cpc.render();
                return;
            }

            // get selection chain to root
            let chain: Array<CPCNode> = this.getSelectionChain();
            let selections: Array<cpc.Selection> = this.cpc.getEditData().selections;
            let axis: CPCNode, choice: CPCNode;
            let parent: cpc.Selection;
            // pop root
            chain.pop();
            // process chain
            chain: while ((axis = chain.pop()) != null) {
                choice = chain.pop();
                if (selections == null) {
                    selections = new Array<cpc.Selection>();
                    parent.selections = selections;
                }
                for (let selection of selections) {
                    if (selection.id == axis.getId()) {
                        if (selection.value != choice.getId()) {
                            // adjust value
                            selection.value = choice.getId();
                            selection.selections = new Array<cpc.Selection>();
                        }
                        // decent
                        selections = selection.selections;
                        parent = selection;
                        continue chain;
                    }
                }
                // create new selection leaf
                parent = new xxx.Selection();
                parent.id = axis.getId();
                parent.value = choice.getId();
                selections.push(parent);
                selections = null;
            }
            // create axis selection
            selection = new xxx.Selection();
            selection.id = this.id;
            selection.value = String(value);
            // root
            if (parent == null) {
                this.insertOrPushSelection(selection, this, selections);
            } else {
                if (!parent.selections) {
                    parent.selections = new Array<cpc.Selection>();
                }
                this.insertOrPushSelection(selection, this, parent.selections);
            }
            this.cpc.render();
        }
    };

    insertOrPushSelection = (selection: cpc.Selection, axis: CPCAxis, selections: Array<cpc.Selection>): void => {
        let added: boolean = false;
        for (let i = 0; i < selections.length; i++) {
            if ((axis).getOrder() < this.cpc.findAxis(selections[i].id).getOrder()) {
                selections.splice(i, 0, selection);
                added = true;
                break;
            }
        }
        if (!added) {
            selections.push(selection);
        }
    };

    onMouseLeave = (): void => {
        // if(this.isNumerical() && this.cpc.isEditing()) {
        this.cpc.hideTooltip();
        // }
    };

    onMouseEnter = (): void => {

    };

    render = (container, x_origin, y_origin): void => {
        this.width = container.attr("width");

        // determine background
        var background = "none";
        if (this.background) {
            background = this.background;
        } else if (this.isNumerical() && this.cpc.isEditing()) {
            background = "#ffffff00"
        }

        // render rectangle
        let c = container.append("rect");
        c.attr("id", this.id);
        c.attr("class", `axis_container ${this.cpc.isEditing() && !this.editable ? "uneditable" : ""}`);
        c.attr("x", 0);
        c.attr("y", 0);
        c.attr("width", container.attr("width"));
        c.attr("height", container.attr("height"));
        c.attr("fill", background);

        // render axis label
        let t = container.append("text");
        t.attr("class", "axis_label");
        t.attr("x", container.attr("width") / 2);
        t.attr("y", 16);
        t.attr("transform", "rotate(-25, " + (container.attr("width") / 2) + ", 16)");
        if(this.cpc.hasCustomAxisLabel(this.id)) {
            t.html(this.cpc.getCustomAxisLabel(this.id));
        } else {
            t.html(this.label);
        }

        // render axis
        let path = d3.path();
        path.moveTo(container.attr("width") / 2, this.padding + 20);
        path.lineTo(container.attr("width") / 2, container.attr("height") - this.padding);
        path.closePath();
        let p = container.append("path");
        p.attr("class", "axis");
        p.attr("d", path);

        this.x = x_origin + container.attr("width") / 2;
        this.y_min = this.padding + 20;
        this.y_max = container.attr("height") - this.padding;
        this.y_origin = y_origin;

        if (this.type == Type.NUMERICAL) {

            // render top tick
            // path = d3.path();
            // path.moveTo(container.attr("width") / 2 - 5, this.padding + 20);
            // path.lineTo(container.attr("width") / 2 + 5, this.padding + 20);
            // path.closePath();
            // p = container.append("path");
            // p.attr("class", "tick");
            // p.attr("d", path);

            // render bottom tick
            // path = d3.path();
            // path.moveTo(container.attr("width") / 2 - 5, container.attr("height") - this.padding);
            // path.lineTo(container.attr("width") / 2 + 5, container.attr("height") - this.padding);
            // path.closePath();
            // p = container.append("path");
            // p.attr("class", "tick");
            // p.attr("d", path);

            // render top tick label
            let t = container.append("text");
            t.attr("class", "tick_label");
            t.attr("x", container.attr("width") / 2 + 5);
            t.attr("y", this.padding + 20);
            t.attr("transform", "rotate(-25, " + (container.attr("width") / 2) + ", " + (this.padding + 20) + ")");
            t.html(this.range.max);

            // render bottom tick label
            t = container.append("text");
            t.attr("class", "tick_label");
            t.attr("x", container.attr("width") / 2 + 5);
            t.attr("y", container.attr("height") - this.padding);
            t.attr("transform", "rotate(-25, " + (container.attr("width") / 2) + ", " + (container.attr("height") - this.padding) + ")");
            t.html(this.range.min);

            // render threshold
            if(this.threshold) {

                // render inside-of-threshold-area
                let c = container.append("rect");
                c.attr("class", 'threshold');
                c.attr("x", 0);
                c.attr("y", 0);
                c.attr("width", container.attr("width"));
                c.attr("height", this.getY(String(this.threshold)));
                c.attr("fill", "#00ff0033");

                // render out-of-threshold-area
                c = container.append("rect");
                c.attr("class", 'threshold');
                c.attr("x", 0);
                c.attr("y", this.getY(String(this.threshold)));
                c.attr("width", container.attr("width"));
                c.attr("height", container.attr("height") - this.getY(String(this.threshold)));
                c.attr("fill", "#ff000033");

                let threshold = d3.path();
                threshold.moveTo(container.attr("width") / 2 - 15, this.getY(String(this.threshold)));
                threshold.lineTo(container.attr("width") / 2 + 15, this.getY(String(this.threshold)));
                threshold.closePath();
                t = container.append("path");
                t.attr("class", "threshold");
                t.attr("d", threshold);
            }
        } else {

            // render choices
            let y_offset = 0;
            // let num_choices = this.choices.length;
            let choices_weight = this.getHWeight();
            for (let choice of this.choices) {
                this.cpc.pushChoice(choice);

                // create container
                let svg = container.append("svg");
                svg.attr("class", "choice");
                svg.attr("x", this.padding);
                svg.attr("y", y_offset + 2 * this.padding);
                svg.attr("width", container.attr("width") - this.padding * 2);
                // svg.attr("height", (container.attr("height") - this.padding * 2) / num_choices);
                svg.attr("height", choice.getHWeight() / choices_weight * (container.attr("height") - this.padding * 2));

                // recursive step
                choice.render(svg, x_origin + this.padding, y_origin + y_offset + 2 * this.padding);
                y_offset += Number(svg.attr("height"));
            }
        }
    };
}

