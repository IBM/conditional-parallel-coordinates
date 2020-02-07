import * as $ from "jquery";
import * as d3 from "d3";
import * as cpc from "./Dataset";
import {CPC} from "./CPC";
import {CPCChoice} from "./CPCChoice";
import {CPCAxis} from "./CPCAxis";

export class CPCLine {

    private static LAST_Y:number;

    private readonly id:string;
    private readonly selections:Array<cpc.Selection>;
    private first;
    private selected = false;
    private readonly css_class: string;

    constructor(private cpc:CPC, line:cpc.Line, private editing:boolean = false) {
        this.id = line.id;
        this.selections = line.selections;
        this.css_class = line.css_class;
    }

    getId = ():string => {
        return this.id;
    };

    getSelections = ():Array<cpc.Selection> => {
        return this.selections;
    };

    render = (container):void => {
        CPCLine.LAST_Y = 0;
        this.first = true;
        let path = d3.path();
        this.process(this.selections, path, container);
        let p = container.append("path");
        p.attr("id", this.id);
        p.attr("class", `line ${this.editing ? "editing" : ""} ${this.css_class ? this.css_class : ""}`);
        p.attr("d", path);

        if(this.selected) {
            $("#" + this.id).addClass("selected");
            $(`.line_tick[data-id='${this.id}']`).show();
        }
    };

    process = (selections:Array<cpc.Selection>, path, container):void => {
        let choice:CPCChoice;
        let axis:CPCAxis;
        let x,y;
        for(let selection of selections) {
            axis = this.cpc.findAxis(selection.id);
            if(!axis) {
                continue;
            }
            if(axis.isCategorical()) {
                choice = this.cpc.findChoice(selection.value);
                choice.pushIntersectingLine(this);
                if(choice.isExpanded()) {
                    if(selection.selections) {
                        this.process(selection.selections, path, container);
                    }
                    continue;
                }
                x = choice.getX();
                y = choice.getY();

                if(this.editing) {
                    // highlight selected choices of edit line
                    $("#" + CPCChoice.CIRCLE_ID_PREFIX + choice.getId()).addClass("selected");
                }
            }
            else {
                x = axis.getX();
                y = axis.getY(selection.value);

                // render text as SVG
                // let t = container.append("text");
                // t.attr("class", `line_tick ${CPCLine.LAST_Y < y ? "down" : "up"} ${this.editing ? "editing" : ""}`);
                // t.attr("data-id", this.id);
                // t.attr("x", x - 5);
                // t.attr("y", y);
                // t.html(String(CPC.round(Number(selection.value), this.cpc.getPreferredPrecision())));

                // render text as HTML
                let pp = d3.select("#" + this.cpc.getId()).append("div");
                pp.attr("class", `line_tick line_tick_boxed ${CPCLine.LAST_Y < y ? "down" : "up"} ${this.editing ? "editing" : ""} `);
                pp.attr("data-id", this.id);
                pp.attr("style", `left: ${x}px; top: ${y}px;`);
                pp.html(String(CPC.round(Number(selection.value), this.cpc.getPreferredPrecision())));
            }

            if(this.first) {
                path.moveTo(x, y);
                if(this.cpc.isEdgeRouting()) {
                    path.lineTo(axis.getX() + axis.getWidth() / 2 - 10, y);
                }
                this.first = false;
            }
            else {
                if(this.cpc.isEdgeRouting()) {
                    path.lineTo(axis.getX() - axis.getWidth() / 2 + 10, y);
                }
                path.lineTo(x, y);
                if(this.cpc.isEdgeRouting()) {
                    path.lineTo(axis.getX() + axis.getWidth() / 2 - 10, y);
                }
            }
            CPCLine.LAST_Y = y;
        }
    };

    onMouseEnter = ():void => {
        $("#" + this.id).addClass("highlighted");
        $(`.line_tick[data-id='${this.id}']`).css("display", "block");
    };

    onMouseLeave = ():void => {
        if(!$("#" + this.id).removeClass("highlighted").hasClass("selected")) {
            $(`.line_tick[data-id='${this.id}']`).css("display", "none");
        }
    };

    deselect = ():void => {
        $("#" + this.id).removeClass("selected");
        $(`.line_tick[data-id='${this.id}']`).css("display", "none");
        this.selected = false;
    };

    select = ():void => {
        $("#" + this.id).addClass("selected");
        $(`.line_tick[data-id='${this.id}']`).css("display", "block");
        this.selected = true;
    };

    onClick = ():void => {
        if(this.cpc.getConfig().deselectOthersOnLineSelect) {
            for(let line of this.cpc.getLines()) {
                if(line.id != this.id) {
                    line.deselect();
                }
            }
        }
        if($("#" + this.id).hasClass("selected")) {
            this.deselect();
        } else {
            this.select();
        }
    };
}
