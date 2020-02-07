import * as $ from "jquery";
import * as cpc from "./Dataset";
import * as xxx from "./Dataset";
import {CPCAxis} from "./CPCAxis";
import {CPC} from "./CPC";
import {CPCLine} from "./CPCLine";
import {CPCNode} from "./CPCNode";

export class CPCChoice extends CPCNode {

    public static CIRCLE_ID_PREFIX = "cpc_c_";

    private padding:number = 10;

    private readonly label:string;
    private readonly axes:Array<CPCAxis>;
    private collapsed = true;
    private collapsible = false;
    private x:number;
    private y:number;
    private intersectingLines:Array<CPCLine>;
    private readonly weight:number;
    private readonly css_class:string;

    constructor(private cpc:CPC, parent:CPCAxis, choice:cpc.Choice) {
        super(parent);
        this.id = choice.id;
        this.label = choice.label;
        this.weight = choice.weight == null ? 1 : choice.weight;
        this.css_class = choice.css_class || '';
        if(choice.axes) {
            this.axes = new Array<CPCAxis>();
            for(let axis of choice.axes) {
                this.axes.push(new CPCAxis(this.cpc, this, axis));
            }
            this.collapsible = true;
        }
    }

    getId = ():string => {
        return this.id;
    };

    getWWeight = ():number => {
        if(!this.collapsed) {
            let sum = 0;
            for(let axis of this.axes) {
                sum += axis.getWWeight()
            }
            return sum;
        }
        else {
            return 1;
        }
    };

    getHWeight = ():number => {
        if(!this.collapsed) {
            let max = 0;
            for(let axis of this.axes) {
                max = Math.max(max, axis.getHWeight());
            }
            return Math.max(this.weight, max);
        }
        else {
            return this.weight;
        }
    };

    getX = ():number => {
        return this.x;
    };

    getY = ():number => {
        return this.y;
    };

    toggleCollapsed = ():void => {
        if(this.cpc.getConfig().collapseOthersOnChoiceExpand) {
            // collect choices in branch to root
            let branch:Array<CPCChoice> = new Array<CPCChoice>();
            branch.push(this);
            let parent:CPCNode = this.getParent();
            while(parent != null) {
                if(parent instanceof CPCChoice) {
                    branch.push(<CPCChoice>parent);
                }
                parent = parent.getParent();
            }
            // collapse all others
            for(let choice of this.cpc.getChoices()) {
                if(!branch.includes(choice)) {
                    choice.collapse();
                }
            }

        }
        if(this.collapsible) {
            // toggle current
            this.collapsed = !this.collapsed;
        }
    };

    collapse = ():void => {
        this.collapsed = true;
    };

    expand = ():void => {
        if(this.collapsible) {
            this.collapsed = false;
        }
    };

    toggleCollapsible = ():void => {
        this.collapsible = !this.collapsible;
    };

    isExpanded = ():boolean => {
        return !this.collapsed;
    };

    isCollapsible = ():boolean => {
        return this.collapsible;
    };

    getIntersectingLines = ():Array<CPCLine> => {
        return this.intersectingLines;
    };

    pushIntersectingLine = (line:CPCLine):void => {
        this.intersectingLines.push(line);
    };

    onMouseEnter = ():void => {
        if(this.cpc.isEditing()) {
            return;
        }
        for(let line of this.intersectingLines) {
            $("#" + line.getId()).addClass("highlighted");
            // $(`.line_tick[data-id='${line.getId()}']`).show();
        }
    };

    onMouseLeave = ():void => {
        if(this.cpc.isEditing()) {
            return;
        }
        for(let line of this.intersectingLines) {
            $("#" + line.getId()).removeClass("highlighted");
            // $(`.line_tick[data-id='${line.getId()}']`).hide();
        }
    };

    onClick = ():void => {
        if(this.cpc.isEditing()) {
            // get selection chain to root
            let chain:Array<CPCNode> = this.getSelectionChain();
            let selections:Array<cpc.Selection> = this.cpc.getEditData().selections;
            let axis:CPCNode, choice:CPCNode;
            let parent:cpc.Selection;
            // pop root
            chain.pop();
            // process chain
            chain: while((axis = chain.pop()) != null) {
                choice = chain.pop();
                if(selections == null) {
                    selections = new Array<cpc.Selection>();
                    parent.selections = selections;
                }
                for(let selection of selections) {
                    if (selection.id == axis.getId()) {
                        if(selection.value != choice.getId()) {
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
                let added:boolean = false;
                for(let i = 0; i < selections.length; i++) {
                    if((<CPCAxis>axis).getOrder() < this.cpc.findAxis(selections[i].id).getOrder()) {
                        selections.splice(i, 0, parent);
                        added = true;
                        break;
                    }
                }
                if(!added) {
                    selections.push(parent);
                }
                selections = null;
            }
            this.toggleCollapsed();
        }
        else {
            this.toggleCollapsed();
        }
        this.cpc.render();
    };

    render = (container, x_origin, y_origin):void => {

        this.intersectingLines = new Array<CPCLine>();

        if(this.collapsible) {

            // render text
            let t = container.append("text");
            t.attr("class", `choice_label ${this.collapsible ? "collapsible" : ""}`);
            t.attr("x", container.attr("width") / 2);
            t.attr("y", container.attr("height") / 2);
            t.attr("transform", "rotate(-25, " + (container.attr("width") / 2) + ", " + (container.attr("height") / 2) + ")");
            if(this.cpc.hasCustomChoiceLabel(this.id)) {
                t.html(this.cpc.getCustomChoiceLabel(this.id));
            } else {
                t.html(this.label);
            }

            // render rectangle
            let c = container.append("rect");
            c.attr("id", this.id);
            c.attr("class", `choice_container ${this.collapsible ? "collapsible" : ""} ${this.collapsed ? "collapsed" : "expanded"} ${this.css_class}`);
            c.attr("x", this.padding);
            c.attr("y", this.padding);
            c.attr("width", container.attr("width") - this.padding * 2);
            c.attr("height", container.attr("height") - this.padding * 2);
        }

        this.x = x_origin + container.attr("width") / 2;
        this.y = y_origin + container.attr("height") / 2;

        if(this.collapsed) {

            // render circle
            let c = container.append("circle");
            c.attr("id", CPCChoice.CIRCLE_ID_PREFIX + this.id);
            c.attr("data-id", this.id);
            c.attr("class", `choice ${this.collapsible ? "collapsible" : ""}`);
            c.attr("cx", container.attr("width") / 2);
            c.attr("cy", container.attr("height") / 2);
            c.attr("r", 12);

            // render text
            let t = container.append("text");
            t.attr("class", `choice_label ${this.collapsible ? "collapsible" : ""}`);
            t.attr("x", container.attr("width") / 2);
            t.attr("y", container.attr("height") / 2);
            t.attr("transform", "rotate(-25, " + (container.attr("width") / 2) + ", " + (container.attr("height") / 2) + ")");
            if(this.cpc.hasCustomChoiceLabel(this.id)) {
                t.html(this.cpc.getCustomChoiceLabel(this.id));
            } else {
                t.html(this.label);
            }

            let tt = container.append("title");
            tt.html("Click to expand");

        } else {

            // render axes
            let x_offset = 0;
            let axes_weight = this.getWWeight();
            for(let axis of this.axes) {
                this.cpc.pushAxis(axis);

                // create container
                let svg = container.append("svg");
                svg.attr("class", "axis");
                svg.attr("x", x_offset + this.padding);
                svg.attr("y", this.padding);
                svg.attr("width", axis.getWWeight() / axes_weight * container.attr("width") - this.padding * 2);
                svg.attr("height", container.attr("height") - this.padding * 2);

                // recursive step
                axis.render(svg, x_origin + x_offset + this.padding, y_origin + this.padding);
                x_offset += Number(svg.attr("width")) + this.padding * 2;
            }

            if(this.collapsible) {
                let tt = container.append("title");
                tt.html("Click to collapse");
            }
        }
    }
}
