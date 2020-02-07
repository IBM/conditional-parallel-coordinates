export class CPCConfiguration {

    public lineClickHandler:any;
    public rootCollapsible:boolean = false;
    public edgeRouting:boolean = true;
    public preferredPrecision:number = 3;
    public axisLabels = new Map<string, string>();
    public choiceLabels = new Map<string, string>();
    public collapseOthersOnChoiceExpand:boolean = true;
    public deselectOthersOnLineSelect:boolean = true;

    constructor() {

    }

}
