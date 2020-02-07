import * as $ from "jquery";
import * as d3 from "d3";
import * as cpc from "./Dataset";
import {CPCLine} from "./CPCLine";
import {CPCChoice} from "./CPCChoice";
import {CPCAxis} from "./CPCAxis";
import {CPCConfiguration} from "./CPCConfiguration";

export class CPC {

    private root:CPCChoice;
    private lines:Array<CPCLine> = new Array<CPCLine>();
    private axes:Array<CPCAxis> = new Array<CPCAxis>();
    private choices:Array<CPCChoice> = new Array<CPCChoice>();

    private editData:cpc.Line;
    private editLine:CPCLine;

    private svg;
    private tooltip;
    private tooltipVisible:boolean = false;
    private tooltipX:number;
    private tooltipY:number;
    private tooltipHTML:string;

    private static EDIT_LINE_ID = 0;

    constructor (private id:string, private data:cpc.Dataset, private config:CPCConfiguration = new CPCConfiguration()) {

        // resize when window resizing
        $(window).resize(():void => {
            this.render();
        });

        // init root node
        let choice = new cpc.Choice();
        choice.id = data.id;
        choice.label = data.label;
        choice.axes = data.axes;
        this.root = new CPCChoice(this, null, choice);
        if(!this.config.rootCollapsible) {
            this.root.toggleCollapsed();
            this.root.toggleCollapsible();
        }

        // init lines
        for(let line of data.lines) {
            this.lines.push(new CPCLine(this, line))
        }

        // render
        this.render();
    }

    public render = ():void => {
        // init container
        let container_id = "#" + this.id;
        $(container_id).html("");
        this.svg = d3.select(container_id).append("svg");
        this.svg.attr("class", `_cpc ${this.editLine ? "editing" : ""}`);
        this.svg.attr("width", $(container_id).width());
        this.svg.attr("height", $(container_id).height());

        // init tooltip
        this.tooltip = d3.select(container_id).append("div");
        this.tooltip.attr("class", "cpc_tooltip");
        // set current tooltip status
        this.tooltipVisible ? this.showTooltip() : this.hideTooltip();
        this.setTooltipX(this.tooltipX);
        this.setTooltipY(this.tooltipY);
        this.setTooltipHTML(this.tooltipHTML);

        // init data structures
        this.axes = new Array<CPCAxis>();
        this.choices = new Array<CPCChoice>();
        this.choices.push(this.root);

        // render axes
        this.root.render(this.svg, 0, 0);

        // render lines
        for(let line of this.lines) {
            line.render(this.svg);
        }

        // render edit line
        if(this.editLine) {
            this.editLine.render(this.svg);
        }

        // add event handlers
        this.addEventHandlers();
    };

    private addEventHandlers = ():void => {
        let that = this;
        // click choice
        $("circle.choice").click(function() {
            that.findChoice($(this).data("id")).onClick();
        });

        // click choice container
        $("rect.choice_container").click(function() {
            that.findChoice($(this).attr("id")).onClick();
        });

        // mouse enter line
        $("path.line").mouseenter(function() {
            that.findLine($(this).attr("id")).onMouseEnter();
        });

        // mouse leave line
        $("path.line").mouseleave(function() {
            that.findLine($(this).attr("id")).onMouseLeave();
        });

        // mouse enter choice
        $("circle.choice").mouseenter(function() {
            that.findChoice($(this).data("id")).onMouseEnter();
        });

        // mouse leave choice
        $("circle.choice").mouseleave(function() {
            that.findChoice($(this).data("id")).onMouseLeave();
        });

        // mouse enter choice container
        $("rect.choice_container").mouseenter(function() {
            that.findChoice($(this).attr("id")).onMouseEnter();
        });

        // mouse leave choice container
        $("rect.choice_container").mouseleave(function() {
            that.findChoice($(this).attr("id")).onMouseLeave();
        });

        // mouse move axis container
        $("rect.axis_container").mousemove(function (event) {
            that.findAxis($(this).attr("id")).onMouseMove(event);
        });

        // mouse enter axis container
        $("rect.axis_container").mouseenter(function () {
            that.findAxis($(this).attr("id")).onMouseEnter();
        });

        // mouse leave axis container
        $("rect.axis_container").mouseleave(function () {
            that.findAxis($(this).attr("id")).onMouseLeave();
        });

        // mouse move
        $("#" + this.id).mousemove((e):void => {
            //if(this.editLine) {
            //    this.render();
            //}
        });

        // click line
        $("path.line").click(function() {
            that.findLine($(this).attr("id")).onClick();
            if(that.config.lineClickHandler) {
                that.config.lineClickHandler($(this).attr("id"));
            }
        });
    };

    pushAxis = (axis:CPCAxis):void => {
        this.axes.push(axis);
    };

    pushChoice = (choice:CPCChoice):void => {
        this.choices.push(choice);
    };

    pushLine = (line:CPCLine):void => {
        this.lines.push(line);
    };

    findChoice = (id:string):CPCChoice => {
        for(let choice of this.choices) {
            if(choice.getId() == id) {
                return choice;
            }
        }
        return null;
    };

    findAxis = (id:string):CPCAxis => {
        for(let axis of this.axes) {
            if(axis.getId() == id) {
                return axis;
            }
        }
        return null;
    };

    findLine = (id:string):CPCLine => {
        for(let line of this.lines) {
            if(line.getId() == id) {
                return line;
            }
        }
        return null;
    };

    public resize = ():void => {
        this.render();
    };

    public selectAllLines = ():void => {
        for(let line of this.lines) {
            line.select();
        }
    };

    public deselectAllLines = ():void => {
        for(let line of this.lines) {
            line.deselect();
        }
    };

    public collapseAllChoices = ():void => {
        for(let choice of this.choices) {
            // if root is not collapsible, do not collapse
            if(choice.getParent() == null) { // <-- only root has no parent
                if(!choice.isCollapsible()) {
                    continue;
                }
            }
            choice.collapse();
        }
        this.render();
    };

    public startEditing = ():void => {
        this.editData = new cpc.Line();
        this.editData.id = "edit_line" + CPC.EDIT_LINE_ID++;
        this.editData.selections = new Array<cpc.Selection>();
        this.editLine = new CPCLine(this, this.editData, true);
        this.render();
    };

    public stopEditing = (callback):void => {
        let line :CPCLine = this.editLine;
        this.editLine = null;
        this.editData = null;
        this.render();
        callback(line);
    };

    public isEditing = ():boolean => {
        if(this.editLine) {
            return true;
        }
        return false;
    };

    public findEditDataSelection = (id:string):cpc.Selection => {
        return this.findSelection(id, this.editData.selections);
    };

    private findSelection = (id:string, selections:Array<cpc.Selection>):cpc.Selection => {
        let result;
        for(let selection of selections) {
            if(selection.id == id) {
                return selection;
            }
            if(selection.selections) {
                if ((result = this.findSelection(id, selection.selections))) {
                    return result;
                }
            }
        }
        return null;
    };

    public isEdgeRouting = ():boolean => {
        return this.config.edgeRouting;
    };

    public getId = ():string => {
        return this.id;
    };

    public getPreferredPrecision = ():number => {
        return this.config.preferredPrecision;
    };

    public getEditData = ():cpc.Line => {
        return this.editData;
    };

    public getChoices = ():Array<CPCChoice> => {
        return this.choices;
    };

    public getLines = ():Array<CPCLine> => {
        return this.lines;
    };

    public getConfig = ():CPCConfiguration => {
        return this.config;
    };

    public hasCustomAxisLabel = (axisId:string):boolean => {
        return this.config.axisLabels.has(axisId);
    };

    public hasCustomChoiceLabel = (choiceId:string):boolean => {
        return this.config.choiceLabels.has(choiceId);
    };

    public getCustomAxisLabel = (axisId:string):string => {
        return this.config.axisLabels.get(axisId);
    };

    public getCustomChoiceLabel = (choiceId:string):string => {
        return this.config.choiceLabels.get(choiceId);
    };

    public setTooltipX = (x:number):void => {
        this.tooltipX = x;
        this.tooltip.style("left", x + "px");
    };

    public setTooltipY = (y:number):void => {
        this.tooltipY = y;
        this.tooltip.style("top", y + "px");
    };

    public showTooltip = ():void => {
        this.tooltipVisible = false;
        this.tooltip.style("display", "block");
    };

    public hideTooltip = ():void => {
        this.tooltipVisible = false;
        this.tooltip.style("display", "none");
    };

    public setTooltipHTML = (html:string):void => {
        this.tooltipHTML = html;
        this.tooltip.html(html);
    };

    public static guessMinimum = (value:number):number => {
        const pos = CPC.getPositionOfMostSignificantDecimal(value);
        return value - Math.pow(10, pos);
    };

    public static guessMaximum = (value:number):number => {
        const pos = CPC.getPositionOfMostSignificantDecimal(value);
        return value + Math.pow(10, pos);
    };

    public static round = (value:number, preferredPrecision:number) => {
        let pos = CPC.getPositionOfMostSignificantDecimal(value);
        if(pos < 0) {
            pos = Math.abs(pos);
        }
        const digits = Math.max(preferredPrecision, pos);
        return +(value).toFixed(digits);
    };

    public static getPositionOfMostSignificantDecimal = (number:number):number => {
        let pos:number = 0;
        number = Math.abs(number);
        if(CPC.isInt(number)) {
            while(number >= 10) {
                number /= 10;
                pos++;
            }
        }
        else {
            number = number % 1;
            while(number < 1) {
                number *= 10;
                pos--;
            }
        }
        return pos;
    };

    private static isInt(n) {
        return n % 1 === 0;
    }
}
