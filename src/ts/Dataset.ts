export class Dataset {
    id:string;
    label:string;
    axes:Array<Axis>;
    lines:Array<Line>;
}

export class Axis {
    id:string;
    label:string;
    weight:number;
    threshold: number;
    type:Type;
    range:Range;
    default:string;
    choices:Array<Choice>;
    background:string;
    editable:boolean;
}

export class Choice {
    id:string;
    label:string;
    weight:number;
    css_class:string;
    axes:Array<Axis>;
}

export class Range {
    constructor(public min:number, public max:number){

    }
}

export class Line {
    id:string;
    css_class:string;
    selections:Array<Selection>;
}

export class Selection {
    id:string;
    value:string;
    selections:Array<Selection>;
}

export enum Type {
    CATEGORICAL, NUMERICAL
}
