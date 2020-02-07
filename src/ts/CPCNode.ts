import {CPCChoice} from "./CPCChoice";

export class CPCNode {

    protected id:string;

    constructor(protected parent:CPCNode) {

    }

    getId = ():string => {
        return this.id;
    };

    getParent = ():CPCNode => {
        return this.parent;
    };

    protected getSelectionChain = ():Array<CPCNode> => {
        let chain = new Array<CPCNode>();
        if(this instanceof CPCChoice) {
            chain.push(this);
        }
        let parent = this.parent;
        while(parent != null) {
            chain.push(parent);
            parent = parent.parent;
        }
        return chain;
    };
}
