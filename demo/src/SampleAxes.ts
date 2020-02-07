import {Axis, Type} from "./../../src/ts/Dataset";
import * as cpc from "./../../src/ts/Dataset";

export class AxisConfiguration extends Axis {

    constructor() {
        super();

        this.id = "1";
        this.label = "Configuration";
        this.type = Type.CATEGORICAL;
        this.default = "1_1";
        // this.background = "#b3e2cd33";

            // axis 1 choice 1
            let choice1_1:cpc.Choice = new cpc.Choice();
            choice1_1.id = "1_1";
            choice1_1.label = "ModelPool";

                // axis 1 choice 1 axis 1
                let axis1_1_1:cpc.Axis = new cpc.Axis();
                axis1_1_1.id = "1_1_1";
                axis1_1_1.label = "Type";
                axis1_1_1.type = Type.CATEGORICAL;
                axis1_1_1.default = "1_1_1_1";

                    // axis 1 choice 1 axis 1 choice 1
                    let choice1_1_1_1:cpc.Choice = new cpc.Choice();
                    choice1_1_1_1.id = "1_1_1_1";
                    choice1_1_1_1.label = "Quality";

                    // axis 1 choice 1 axis 1 choice 2
                    let choice1_1_1_2:cpc.Choice = new cpc.Choice();
                    choice1_1_1_2.id = "1_1_1_2";
                    choice1_1_1_2.label = "Interemediate";

                    // axis 1 choice 1 axis 1 choice 3
                    let choice1_1_1_3:cpc.Choice = new cpc.Choice();
                    choice1_1_1_3.id = "1_1_1_3";
                    choice1_1_1_3.label = "Speed";

                        // axis 1 choice 1 axis 1 choice 3 axis
                        let axis1_1_1_3_1:cpc.Axis = new cpc.Axis();
                        axis1_1_1_3_1.id = "1_1_1_3_1";
                        axis1_1_1_3_1.label = "alpha";
                        axis1_1_1_3_1.type = Type.NUMERICAL;
                        axis1_1_1_3_1.default = "0.5";
                        axis1_1_1_3_1.range = new cpc.Range(0, 1);

                        // axis 1 choice 1 axis 1 choice 3 axis
                        let axis1_1_1_3_2:cpc.Axis = new cpc.Axis();
                        axis1_1_1_3_2.id = "1_1_1_3_2";
                        axis1_1_1_3_2.label = "beta";
                        axis1_1_1_3_2.type = Type.NUMERICAL;
                        axis1_1_1_3_2.default = "0.5";
                        axis1_1_1_3_2.range = new cpc.Range(0, 1);

                        let axis1_1_1_3 = new Array<cpc.Axis>();
                        axis1_1_1_3.push(axis1_1_1_3_1);
                        axis1_1_1_3.push(axis1_1_1_3_2);
                        choice1_1_1_3.axes = axis1_1_1_3;

                    // axis 1 choice 1 axis 1 choices
                    let choices1_1_1 = new Array<cpc.Choice>();
                    choices1_1_1.push(choice1_1_1_1);
                    choices1_1_1.push(choice1_1_1_2);
                    choices1_1_1.push(choice1_1_1_3);
                    axis1_1_1.choices = choices1_1_1;

                // axis 1 choice 1 axis 2
                let axis1_1_2:cpc.Axis = new cpc.Axis();
                axis1_1_2.id = "1_1_2";
                axis1_1_2.label = "Holdout";
                axis1_1_2.type = Type.NUMERICAL;
                axis1_1_2.default = "0.1";
                axis1_1_2.range = new cpc.Range(0.0001, 0.9999);

                // axis 1 choice 1 axis 3
                let axis1_1_3:cpc.Axis = new cpc.Axis();
                axis1_1_3.id = "1_1_3";
                axis1_1_3.label = "EstimatorNumber";
                axis1_1_3.type = Type.NUMERICAL;
                axis1_1_3.default = "2";
                axis1_1_3.range = new cpc.Range(1, 4);

            // axis 1 choice 1 axes
            let axes1_1 = new Array<cpc.Axis>();
            axes1_1.push(axis1_1_1);
            axes1_1.push(axis1_1_2);
            axes1_1.push(axis1_1_3);
            choice1_1.axes = axes1_1;

            // axis 1 choice 2
            let choice1_2:cpc.Choice = new cpc.Choice();
            choice1_2.id = "1_2";
            choice1_2.label = "Disabled";

        // axis 1 choices
        let choices1 = new Array<cpc.Choice>();
        choices1.push(choice1_1);
        choices1.push(choice1_2);
        this.choices = choices1;
    }
}

export class AxisPreprocessing extends Axis {
    constructor() {
        super();
        this.id = "2";
        this.label = "Preprocessing";
        this.type = Type.CATEGORICAL;
        this.default = "2_1";
        // this.background = "#cbd5e833";

            // axis 2 choice 1
            let choice2_1:cpc.Choice = new cpc.Choice();
            choice2_1.id = "2_1";
            choice2_1.label = "Enabled";

                // axis 2 choice 1 axis 1
                let axis2_1_1:cpc.Axis = new cpc.Axis();
                axis2_1_1.id = "2_1_1";
                axis2_1_1.label = "CategoricalImputation";
                axis2_1_1.type = Type.CATEGORICAL;
                axis2_1_1.default = "2_1_1_1";

                    // axis 2 choice 1 axis 1 choice 1
                    let choice2_1_1_1:cpc.Choice = new cpc.Choice();
                    choice2_1_1_1.id = "2_1_1_1";
                    choice2_1_1_1.label = "None";

                    // axis 2 choice 1 axis 1 choice 2
                    let choice2_1_1_2:cpc.Choice = new cpc.Choice();
                    choice2_1_1_2.id = "2_1_1_2";
                    choice2_1_1_2.label = "?";

                    // axis 2 choice 1 axis 1 choice 3
                    let choice2_1_1_3:cpc.Choice = new cpc.Choice();
                    choice2_1_1_3.id = "2_1_1_3";
                    choice2_1_1_3.label = "NaN";

                    // axis 2 choice 1 axis 1 choice 4
                    let choice2_1_1_4:cpc.Choice = new cpc.Choice();
                    choice2_1_1_4.id = "2_1_1_4";
                    choice2_1_1_4.label = "{empty}";

                    let choices2_1_1 = new Array<cpc.Choice>();
                    choices2_1_1.push(choice2_1_1_1);
                    choices2_1_1.push(choice2_1_1_2);
                    choices2_1_1.push(choice2_1_1_3);
                    choices2_1_1.push(choice2_1_1_4);
                    axis2_1_1.choices = choices2_1_1;

                // axis 2 choice 1 axis 2
                let axis2_1_2:cpc.Axis = new cpc.Axis();
                axis2_1_2.id = "2_1_2";
                axis2_1_2.label = "NumericalImputation";
                axis2_1_2.type = Type.CATEGORICAL;
                axis2_1_2.default = "2_1_2_1";

                    // axis 2 choice 1 axis 2 choice 1
                    let choice2_1_2_1:cpc.Choice = new cpc.Choice();
                    choice2_1_2_1.id = "2_1_2_1";
                    choice2_1_2_1.label = "-1";

                    // axis 2 choice 1 axis 2 choice 2
                    let choice2_1_2_2:cpc.Choice = new cpc.Choice();
                    choice2_1_2_2.id = "2_1_2_2";
                    choice2_1_2_2.label = "0";

                    // axis 2 choice 1 axis 2 choice 3
                    let choice2_1_2_3:cpc.Choice = new cpc.Choice();
                    choice2_1_2_3.id = "2_1_2_3";
                    choice2_1_2_3.label = "999999";

                    let choices2_1_2 = new Array<cpc.Choice>();
                    choices2_1_2.push(choice2_1_2_1);
                    choices2_1_2.push(choice2_1_2_2);
                    choices2_1_2.push(choice2_1_2_3);
                    axis2_1_2.choices = choices2_1_2;

                // axis 2 choice 1 axes
                let axes2_1 = new Array<cpc.Axis>();
                axes2_1.push(axis2_1_1);
                axes2_1.push(axis2_1_2);
                choice2_1.axes = axes2_1;

            // axis 2 choice 2
            let choice2_2:cpc.Choice = new cpc.Choice();
            choice2_2.id = "2_2";
            choice2_2.label = "Disabled";

        // axis 2 choices
        let choices2 = new Array<cpc.Choice>();
        choices2.push(choice2_1);
        choices2.push(choice2_2);
        this.choices = choices2;
    }
}

export class AxisTransformer extends Axis {
    constructor() {
        super();
        this.id = "3";
        this.label = "Transformer";
        this.type = Type.CATEGORICAL;
        this.default = "3_1";
        // this.background = "#cbd5e833";

            // axis 3 choice 1
            let choice3_1:cpc.Choice = new cpc.Choice();
            choice3_1.id = "3_1";
            choice3_1.label = "Enabled";

                // axis 3 choice 1 axis 1
                let axis3_1_1:cpc.Axis = new cpc.Axis();
                axis3_1_1.id = "3_1_1";
                axis3_1_1.label = "max";
                axis3_1_1.type = Type.CATEGORICAL;
                axis3_1_1.default = "3_1_1_1";

                    // axis 3 choice 1 axis 1 choice 1
                    let choice3_1_1_1:cpc.Choice = new cpc.Choice();
                    choice3_1_1_1.id = "3_1_1_1";
                    choice3_1_1_1.label = "Enabled";

                    // axis 3 choice 1 axis 1 choice 2
                    let choice3_1_1_2:cpc.Choice = new cpc.Choice();
                    choice3_1_1_2.id = "3_1_1_2";
                    choice3_1_1_2.label = "Disabled";

                    // axis 3 choice 1 axis 1 choices
                    let choices3_1_1 = new Array<cpc.Choice>();
                    choices3_1_1.push(choice3_1_1_1);
                    choices3_1_1.push(choice3_1_1_2);
                    axis3_1_1.choices = choices3_1_1;

                // axis 3 choice 1 axis 2
                let axis3_1_2:cpc.Axis = new cpc.Axis();
                axis3_1_2.id = "3_1_2";
                axis3_1_2.label = "FS1_1";
                axis3_1_2.type = Type.CATEGORICAL;
                axis3_1_2.default = "3_1_2_1";

                    // axis 3 choice 1 axis 2 choice 1
                    let choice3_1_2_1:cpc.Choice = new cpc.Choice();
                    choice3_1_2_1.id = "3_1_2_1";
                    choice3_1_2_1.label = "Enabled";

                    // axis 3 choice 1 axis 2 choice 2
                    let choice3_1_2_2:cpc.Choice = new cpc.Choice();
                    choice3_1_2_2.id = "3_1_2_2";
                    choice3_1_2_2.label = "Disabled";

                    // axis 3 choice 1 axis 2 choices
                    let choices3_1_2 = new Array<cpc.Choice>();
                    choices3_1_2.push(choice3_1_2_1);
                    choices3_1_2.push(choice3_1_2_2);
                    axis3_1_2.choices = choices3_1_2;

                // axis 3 choice 1 axis 3
                let axis3_1_3:cpc.Axis = new cpc.Axis();
                axis3_1_3.id = "3_1_3";
                axis3_1_3.label = "square";
                axis3_1_3.type = Type.CATEGORICAL;
                axis3_1_3.default = "3_1_3_1";

                    // axis 3 choice 1 axis 3 choice 1
                    let choice3_1_3_1:cpc.Choice = new cpc.Choice();
                    choice3_1_3_1.id = "3_1_3_1";
                    choice3_1_3_1.label = "Enabled";

                    // axis 3 choice 1 axis 3 choice 2
                    let choice3_1_3_2:cpc.Choice = new cpc.Choice();
                    choice3_1_3_2.id = "3_1_3_2";
                    choice3_1_3_2.label = "Disabled";

                    // axis 3 choice 1 axis 3 choices
                    let choices3_1_3 = new Array<cpc.Choice>();
                    choices3_1_3.push(choice3_1_3_1);
                    choices3_1_3.push(choice3_1_3_2);
                    axis3_1_3.choices = choices3_1_3;

                // axis 3 choice 1 axis 4
                let axis3_1_4:cpc.Axis = new cpc.Axis();
                axis3_1_4.id = "3_1_4";
                axis3_1_4.label = "FS1_2";
                axis3_1_4.type = Type.CATEGORICAL;
                axis3_1_4.default = "3_1_4_1";

                    // axis 3 choice 1 axis 3 choice 1
                    let choice3_1_4_1:cpc.Choice = new cpc.Choice();
                    choice3_1_4_1.id = "3_1_4_1";
                    choice3_1_4_1.label = "Enabled";

                    // axis 3 choice 1 axis 3 choice 2
                    let choice3_1_4_2:cpc.Choice = new cpc.Choice();
                    choice3_1_4_2.id = "3_1_4_2";
                    choice3_1_4_2.label = "Disabled";

                    // axis 3 choice 1 axis 3 choices
                    let choices3_1_4 = new Array<cpc.Choice>();
                    choices3_1_4.push(choice3_1_4_1);
                    choices3_1_4.push(choice3_1_4_2);
                    axis3_1_4.choices = choices3_1_4;

                // axis 2 choice 1 axes
                let axes3_1 = new Array<cpc.Axis>();
                axes3_1.push(axis3_1_1);
                axes3_1.push(axis3_1_2);
                axes3_1.push(axis3_1_3);
                axes3_1.push(axis3_1_4);
                choice3_1.axes = axes3_1;

            // axis 3 choice 2
            let choice3_2:cpc.Choice = new cpc.Choice();
            choice3_2.id = "3_2";
            choice3_2.label = "Disabled";

        // axis 3 choices
        let choices3 = new Array<cpc.Choice>();
        choices3.push(choice3_1);
        choices3.push(choice3_2);
        this.choices = choices3;
    }
}

export class AxisModelSelection extends Axis {
    constructor() {
        super();
        this.id = "4";
        this.label = "ModelSelection";
        this.type = Type.CATEGORICAL;
        this.default = "4_1";
        // this.background = "#cbd5e833";

            // axis 4 choice 1
            let choice4_1:cpc.Choice = new cpc.Choice();
            choice4_1.id = "4_1";
            choice4_1.label = "ExtraTrees";

            // axis 4 choice 2
            let choice4_2:cpc.Choice = new cpc.Choice();
            choice4_2.id = "4_2";
            choice4_2.label = "DecisionTree";

                // axis 4 choice 2 axis 1
                let axis4_2_1:cpc.Axis = new cpc.Axis();
                axis4_2_1.id = "4_2_1";
                axis4_2_1.label = "Splitter";
                axis4_2_1.type = Type.CATEGORICAL;
                axis4_2_1.default = "4_2_1_1";

                    // axis 4 choice 2 axis 1 choice 1
                    let choice4_2_1_1:cpc.Choice = new cpc.Choice();
                    choice4_2_1_1.id = "4_2_1_1";
                    choice4_2_1_1.label = "best";

                    // axis 4 choice 2 axis 1 choice 2
                    let choice4_2_1_2:cpc.Choice = new cpc.Choice();
                    choice4_2_1_2.id = "4_2_1_2";
                    choice4_2_1_2.label = "random";

                    // axis 4 choice 2 axis 1 choices
                    let choices4_2_1 = new Array<cpc.Choice>();
                    choices4_2_1.push(choice4_2_1_1);
                    choices4_2_1.push(choice4_2_1_2);
                    axis4_2_1.choices = choices4_2_1;

                // axis 4 choice 2 axis 2
                let axis4_2_2:cpc.Axis = new cpc.Axis();
                axis4_2_2.id = "4_2_2";
                axis4_2_2.label = "Criterion";
                axis4_2_2.type = Type.CATEGORICAL;
                axis4_2_2.default = "4_2_2_1";

                    // axis 4 choice 2 axis 2 choice 1
                    let choice4_2_2_1:cpc.Choice = new cpc.Choice();
                    choice4_2_2_1.id = "4_2_2_1";
                    choice4_2_2_1.label = "gini";

                    // axis 4 choice 2 axis 2 choice 2
                    let choice4_2_2_2:cpc.Choice = new cpc.Choice();
                    choice4_2_2_2.id = "4_2_2_2";
                    choice4_2_2_2.label = "entropy";

                    // axis 4 choice 2 axis 2 choices
                    let choices4_2_2 = new Array<cpc.Choice>();
                    choices4_2_2.push(choice4_2_2_1);
                    choices4_2_2.push(choice4_2_2_2);
                    axis4_2_2.choices = choices4_2_2;

                // axis 4 choice 2 axis 3
                let axis4_2_3:cpc.Axis = new cpc.Axis();
                axis4_2_3.id = "4_2_3";
                axis4_2_3.label = "MinSamplesSplit";
                axis4_2_3.type = Type.NUMERICAL;
                axis4_2_3.default = "2";
                axis4_2_3.range = new cpc.Range(1, 100);

                // axis 4 choice 2 axis 4
                let axis4_2_4:cpc.Axis = new cpc.Axis();
                axis4_2_4.id = "4_2_4";
                axis4_2_4.label = "MinSamplesLeaf";
                axis4_2_4.type = Type.NUMERICAL;
                axis4_2_4.default = "1";
                axis4_2_4.range = new cpc.Range(1, 100);

                // axis 4 choice 2 axis 5
                let axis4_2_5:cpc.Axis = new cpc.Axis();
                axis4_2_5.id = "4_2_5";
                axis4_2_5.label = "MaxFeatures";
                axis4_2_5.type = Type.CATEGORICAL;
                axis4_2_5.default = "4_2_5_1";

                    // axis 4 choice 2 axis 5 choice 1
                    let choice4_2_5_1:cpc.Choice = new cpc.Choice();
                    choice4_2_5_1.id = "4_2_5_1";
                    choice4_2_5_1.label = "auto";

                    // axis 4 choice 2 axis 2 choice 2
                    let choice4_2_5_2:cpc.Choice = new cpc.Choice();
                    choice4_2_5_2.id = "4_2_5_2";
                    choice4_2_5_2.label = "sqrt";

                    // axis 4 choice 2 axis 2 choice 3
                    let choice4_2_5_3:cpc.Choice = new cpc.Choice();
                    choice4_2_5_3.id = "4_2_5_3";
                    choice4_2_5_3.label = "log2";

                    // axis 4 choice 2 axis 2 choice 4
                    let choice4_2_5_4:cpc.Choice = new cpc.Choice();
                    choice4_2_5_4.id = "4_2_5_4";
                    choice4_2_5_4.label = "none";

                    // axis 4 choice 2 axis 2 choices
                    let choices4_2_5 = new Array<cpc.Choice>();
                    choices4_2_5.push(choice4_2_5_1);
                    choices4_2_5.push(choice4_2_5_2);
                    choices4_2_5.push(choice4_2_5_3);
                    choices4_2_5.push(choice4_2_5_4);
                    axis4_2_5.choices = choices4_2_5;

                // axis 4 choice 2 axes
                let axes4_2 = new Array<cpc.Axis>();
                axes4_2.push(axis4_2_1);
                axes4_2.push(axis4_2_2);
                axes4_2.push(axis4_2_3);
                axes4_2.push(axis4_2_4);
                axes4_2.push(axis4_2_5);
                choice4_2.axes = axes4_2;

            // axis 4 choice 3
            let choice4_3:cpc.Choice = new cpc.Choice();
            choice4_3.id = "4_3";
            choice4_3.label = "XGBClassifier";

                // axis 4 choice 3 axis 1
                let axis4_3_1:cpc.Axis = new cpc.Axis();
                axis4_3_1.id = "4_3_1";
                axis4_3_1.label = "Gamma";
                axis4_3_1.type = Type.NUMERICAL;
                axis4_3_1.default = "1";
                axis4_3_1.range = new cpc.Range(0, 1000);

                // axis 4 choice 3 axis 2
                let axis4_3_2:cpc.Axis = new cpc.Axis();
                axis4_3_2.id = "4_3_2";
                axis4_3_2.label = "MaxDepth";
                axis4_3_2.type = Type.NUMERICAL;
                axis4_3_2.default = "3";
                axis4_3_2.range = new cpc.Range(0, 1000);

                // axis 4 choice 3 axis 3
                let axis4_3_3:cpc.Axis = new cpc.Axis();
                axis4_3_3.id = "4_3_3";
                axis4_3_3.label = "MinChildWeight";
                axis4_3_3.type = Type.NUMERICAL;
                axis4_3_3.default = "1";
                axis4_3_3.range = new cpc.Range(0, 1000);

                // axis 4 choice 3 axis 4
                let axis4_3_4:cpc.Axis = new cpc.Axis();
                axis4_3_4.id = "4_3_4";
                axis4_3_4.label = "silent";
                axis4_3_4.type = Type.CATEGORICAL;
                axis4_3_4.default = "4_3_4_1";

                    // axis 4 choice 3 axis 4 choice 1
                    let choice4_3_4_1:cpc.Choice = new cpc.Choice();
                    choice4_3_4_1.id = "4_3_4_1";
                    choice4_3_4_1.label = "true";

                    // axis 4 choice 3 axis 4 choice 2
                    let choice4_3_4_2:cpc.Choice = new cpc.Choice();
                    choice4_3_4_2.id = "4_3_4_2";
                    choice4_3_4_2.label = "false";

                    // axis 4 choice 3 axis 4 choices
                    let choices4_3_4 = new Array<cpc.Choice>();
                    choices4_3_4.push(choice4_3_4_1);
                    choices4_3_4.push(choice4_3_4_2);
                    axis4_3_4.choices = choices4_3_4;

                // axis 4 choice 3 axes
                let axes4_3 = new Array<cpc.Axis>();
                axes4_3.push(axis4_3_1);
                axes4_3.push(axis4_3_2);
                axes4_3.push(axis4_3_3);
                axes4_3.push(axis4_3_4);
                choice4_3.axes = axes4_3;

            // axis 4 choice 4
            let choice4_4:cpc.Choice = new cpc.Choice();
            choice4_4.id = "4_4";
            choice4_4.label = "LogisticRegression";

                // axis 4 choice 4 axis 1
                let axis4_4_1:cpc.Axis = new cpc.Axis();
                axis4_4_1.id = "4_4_1";
                axis4_4_1.label = "Penalty";
                axis4_4_1.type = Type.CATEGORICAL;
                axis4_4_1.default = "4_4_1_1";

                    // axis 4 choice 4 axis 1 choice 1
                    let choice4_4_1_1:cpc.Choice = new cpc.Choice();
                    choice4_4_1_1.id = "4_4_1_1";
                    choice4_4_1_1.label = "L1";

                    // axis 4 choice 4 axis 1 choice 2
                    let choice4_4_1_2:cpc.Choice = new cpc.Choice();
                    choice4_4_1_2.id = "4_4_1_2";
                    choice4_4_1_2.label = "L2";

                // axis 4 choice 4 axis 4 choices
                let choices4_4_1 = new Array<cpc.Choice>();
                choices4_4_1.push(choice4_4_1_1);
                choices4_4_1.push(choice4_4_1_2);
                axis4_4_1.choices = choices4_4_1;

                // axis 4 choice 4 axis 2
                let axis4_4_2:cpc.Axis = new cpc.Axis();
                axis4_4_2.id = "4_4_2";
                axis4_4_2.label = "Dual";
                axis4_4_2.type = Type.CATEGORICAL;
                axis4_4_2.default = "4_4_2_1";

                    // axis 4 choice 4 axis 2 choice 1
                    let choice4_4_2_1:cpc.Choice = new cpc.Choice();
                    choice4_4_2_1.id = "4_4_2_1";
                    choice4_4_2_1.label = "true";

                    // axis 4 choice 4 axis 2 choice 2
                    let choice4_4_2_2:cpc.Choice = new cpc.Choice();
                    choice4_4_2_2.id = "4_4_2_2";
                    choice4_4_2_2.label = "false";

                // axis 4 choice 4 axis 2 choices
                let choices4_4_2 = new Array<cpc.Choice>();
                choices4_4_2.push(choice4_4_2_1);
                choices4_4_2.push(choice4_4_2_2);
                axis4_4_2.choices = choices4_4_2;

            // axis 4 choice 4 axis 3
            let axis4_4_3:cpc.Axis = new cpc.Axis();
            axis4_4_3.id = "4_4_3";
            axis4_4_3.label = "fit_intercept";
            axis4_4_3.type = Type.CATEGORICAL;
            axis4_4_3.default = "4_4_3_1";

                // axis 4 choice 4 axis 3 choice 1
                let choice4_4_3_1:cpc.Choice = new cpc.Choice();
                choice4_4_3_1.id = "4_4_3_1";
                choice4_4_3_1.label = "true";

                // axis 4 choice 4 axis 3 choice 2
                let choice4_4_3_2:cpc.Choice = new cpc.Choice();
                choice4_4_3_2.id = "4_4_3_2";
                choice4_4_3_2.label = "false";

                // axis 4 choice 4 axis 3 choices
                let choices4_4_3 = new Array<cpc.Choice>();
                choices4_4_3.push(choice4_4_3_1);
                choices4_4_3.push(choice4_4_3_2);
                axis4_4_3.choices = choices4_4_3;

            // axis 4 choice 4 axis 4
            let axis4_4_4:cpc.Axis = new cpc.Axis();
            axis4_4_4.id = "4_4_4";
            axis4_4_4.label = "intercept_scaling";
            axis4_4_4.type = Type.NUMERICAL;
            axis4_4_4.default = "5";
            axis4_4_4.range = new cpc.Range(0, 15);

            // axis 4 choice 4 axis 5
            let axis4_4_5:cpc.Axis = new cpc.Axis();
            axis4_4_5.id = "4_4_5";
            axis4_4_5.label = "max_iter";
            axis4_4_5.type = Type.CATEGORICAL;
            axis4_4_5.default = "4_4_5_1";

                // axis 4 choice 4 axis 5 choice 1
                let choice4_4_5_1:cpc.Choice = new cpc.Choice();
                choice4_4_5_1.id = "4_4_5_1";
                choice4_4_5_1.label = "10";

                // axis 4 choice 4 axis 5 choice 2
                let choice4_4_5_2:cpc.Choice = new cpc.Choice();
                choice4_4_5_2.id = "4_4_5_2";
                choice4_4_5_2.label = "100";

                // axis 4 choice 4 axis 5 choice 3
                let choice4_4_5_3:cpc.Choice = new cpc.Choice();
                choice4_4_5_3.id = "4_4_5_3";
                choice4_4_5_3.label = "1000";

                // axis 4 choice 4 axis 5 choices
                let choices4_4_5 = new Array<cpc.Choice>();
                choices4_4_5.push(choice4_4_5_1);
                choices4_4_5.push(choice4_4_5_2);
                choices4_4_5.push(choice4_4_5_3);
                axis4_4_5.choices = choices4_4_5;

            // axis 4 choice 4 axes
            let axes4_4 = new Array<cpc.Axis>();
            axes4_4.push(axis4_4_1);
            axes4_4.push(axis4_4_2);
            axes4_4.push(axis4_4_3);
            axes4_4.push(axis4_4_4);
            axes4_4.push(axis4_4_5);
            choice4_4.axes = axes4_4;

        // axis 4 choices
        let choices4 = new Array<cpc.Choice>();
        choices4.push(choice4_1);
        choices4.push(choice4_2);
        choices4.push(choice4_3);
        choices4.push(choice4_4);
        this.choices = choices4;
    }
}
