import * as cpc from "./../../src/ts/Dataset";
import {Type} from "./../../src/ts/Dataset";
import {AxisConfiguration, AxisModelSelection, AxisPreprocessing, AxisTransformer} from "./SampleAxes";

export class SampleDataset {

    private readonly ds:cpc.Dataset;

    constructor() {
        this.ds = new cpc.Dataset();

        this.ds.id = "dataset";
        this.ds.label = "Sample Search Space";

        // axes
        this.ds.axes = new Array<cpc.Axis>();

        // axis configuration
        let axis_configuration:cpc.Axis = new AxisConfiguration();
        this.ds.axes.push(axis_configuration);

        // axis pre-processing
        let axis_preprocessing:cpc.Axis = new AxisPreprocessing();
        this.ds.axes.push(axis_preprocessing);

        // axis transformer
        let axis_transformer:cpc.Axis = new AxisTransformer();
        this.ds.axes.push(axis_transformer);

        // axis model selection
        let axis_model_selection:cpc.Axis = new AxisModelSelection();
        this.ds.axes.push(axis_model_selection);

        // axis 5
        let axis5:cpc.Axis = new cpc.Axis();
        axis5.id = "5";
        axis5.label = "Accuracy";
        axis5.type = Type.NUMERICAL;
        axis5.default = "0.5";
        axis5.threshold = 0.3;
        axis5.range = new cpc.Range(0.15, 1);
        // axis5.background = "#fdcdac33";
        axis5.background = "#cbd5e833";
        axis5.editable = false;

        this.ds.axes.push(axis5);

        // axis 6
        let axis6:cpc.Axis = new cpc.Axis();
        axis6.id = "6";
        axis6.label = "AveragePrecision";
        axis6.type = Type.NUMERICAL;
        axis6.default = "0.5";
        axis6.range = new cpc.Range(0, 1);
        // axis6.background = "#fdcdac33";
        axis6.background = "#cbd5e833";
        axis6.editable = false;

        this.ds.axes.push(axis6);

        // axis 7
        let axis7:cpc.Axis = new cpc.Axis();
        axis7.id = "7";
        axis7.label = "Runtime";
        axis7.type = Type.NUMERICAL;
        axis7.default = "0.5";
        axis7.range = new cpc.Range(0, 100);
        // axis7.background = "#fdcdac33";
        axis7.background = "#cbd5e833";
        axis7.editable = false;

        this.ds.axes.push(axis7);

        // lines
        this.ds.lines = new Array<cpc.Line>();

        // line 1
        let line1:cpc.Line = new cpc.Line();
        line1.id = "l_1";

        // line 1 axis 1
        let sel1_1:cpc.Selection = new cpc.Selection();
        sel1_1.id = "1";
        sel1_1.value = "1_1";

        // line 1 axis 1 choice 1 axis 1 choice 3
        let sel1_1_1:cpc.Selection = new cpc.Selection();
        sel1_1_1.id = "1_1_1";
        sel1_1_1.value = "1_1_1_3";

        // line 1 axis 1 choice 1 axis 1 choice 3 axis 1
        let sel1_1_1_3_1:cpc.Selection = new cpc.Selection();
        sel1_1_1_3_1.id = "1_1_1_3_1";
        sel1_1_1_3_1.value = "0.0200";

        // line 1 axis 1 choice 1 axis 1 choice 3 axis 2
        let sel1_1_1_3_2:cpc.Selection = new cpc.Selection();
        sel1_1_1_3_2.id = "1_1_1_3_2";
        sel1_1_1_3_2.value = "0.700";

        let sel1_1_1_3:Array<cpc.Selection> = new Array<cpc.Selection>();
        sel1_1_1_3.push(sel1_1_1_3_1);
        sel1_1_1_3.push(sel1_1_1_3_2);
        sel1_1.selections = sel1_1_1_3;

        sel1_1_1.selections = sel1_1_1_3;

        // line 1 axis1 choice 1 axis 2
        let sel1_1_2:cpc.Selection = new cpc.Selection();
        sel1_1_2.id = "1_1_2";
        sel1_1_2.value = "0.0200";

        // line 1 axis 1 choice 1 axis 3
        let sel1_1_3:cpc.Selection = new cpc.Selection();
        sel1_1_3.id = "1_1_3";
        sel1_1_3.value = "3";

        let sel1_sel1:Array<cpc.Selection> = new Array<cpc.Selection>();
        sel1_sel1.push(sel1_1_1);
        sel1_sel1.push(sel1_1_2);
        sel1_sel1.push(sel1_1_3);
        sel1_1.selections = sel1_sel1;

        // line 1 axis 2
        let sel1_2:cpc.Selection = new cpc.Selection();
        sel1_2.id = "2";
        sel1_2.value = "2_1";

        // line 1 axis 2 choice 1 axis 1
        let sel1_2_1:cpc.Selection = new cpc.Selection();
        sel1_2_1.id = "2_1_1";
        sel1_2_1.value = "2_1_1_3";

        // line 1 axis 2 choice 1 axis 2
        let sel1_2_2:cpc.Selection = new cpc.Selection();
        sel1_2_2.id = "2_1_2";
        sel1_2_2.value = "2_1_2_3";

        let sel1_sel2:Array<cpc.Selection> = new Array<cpc.Selection>();
        sel1_sel2.push(sel1_2_1);
        sel1_sel2.push(sel1_2_2);
        sel1_2.selections = sel1_sel2;

        // line 1 axis 3
        let sel1_3:cpc.Selection = new cpc.Selection();
        sel1_3.id = "3";
        sel1_3.value = "3_1";

        // line 1 axis 3 choice 1 axis 1
        let sel1_3_1:cpc.Selection = new cpc.Selection();
        sel1_3_1.id = "3_1_1";
        sel1_3_1.value = "3_1_1_1";

        // line 1 axis 3 choice 1 axis 2
        let sel1_3_2:cpc.Selection = new cpc.Selection();
        sel1_3_2.id = "3_1_2";
        sel1_3_2.value = "3_1_2_2";

        // line 1 axis 3 choice 1 axis 3
        let sel1_3_3:cpc.Selection = new cpc.Selection();
        sel1_3_3.id = "3_1_3";
        sel1_3_3.value = "3_1_3_1";

        // line 1 axis 3 choice 1 axis 4
        let sel1_3_4:cpc.Selection = new cpc.Selection();
        sel1_3_4.id = "3_1_4";
        sel1_3_4.value = "3_1_4_2";

        let sel1_sel3:Array<cpc.Selection> = new Array<cpc.Selection>();
        sel1_sel3.push(sel1_3_1);
        sel1_sel3.push(sel1_3_2);
        sel1_sel3.push(sel1_3_3);
        sel1_sel3.push(sel1_3_4);
        sel1_3.selections = sel1_sel3;

        // line 1 axis 4
        let sel1_4:cpc.Selection = new cpc.Selection();
        sel1_4.id = "4";
        sel1_4.value = "4_2";

        // line 1 axis 4 choice 2 axis 1
        let sel1_4_1:cpc.Selection = new cpc.Selection();
        sel1_4_1.id = "4_2_1";
        sel1_4_1.value = "4_2_1_1";

        // line 1 axis 4 choice 2 axis 2
        let sel1_4_2:cpc.Selection = new cpc.Selection();
        sel1_4_2.id = "4_2_2";
        sel1_4_2.value = "4_2_2_1";

        // line 1 axis 4 choice 2 axis 3
        let sel1_4_3:cpc.Selection = new cpc.Selection();
        sel1_4_3.id = "4_2_3";
        sel1_4_3.value = "1";

        // line 1 axis 4 choice 2 axis 4
        let sel1_4_4:cpc.Selection = new cpc.Selection();
        sel1_4_4.id = "4_2_4";
        sel1_4_4.value = "100";

        // line 1 axis 4 choice 2 axis 5
        let sel1_4_5:cpc.Selection = new cpc.Selection();
        sel1_4_5.id = "4_2_5";
        sel1_4_5.value = "4_2_5_1";

        let sel1_sel4:Array<cpc.Selection> = new Array<cpc.Selection>();
        sel1_sel4.push(sel1_4_1);
        sel1_sel4.push(sel1_4_2);
        sel1_sel4.push(sel1_4_3);
        sel1_sel4.push(sel1_4_4);
        sel1_sel4.push(sel1_4_5);
        sel1_4.selections = sel1_sel4;

        // line 1 axis 5
        let sel1_5:cpc.Selection = new cpc.Selection();
        sel1_5.id = "5";
        sel1_5.value = "0.762";

        // line 1 axis 6
        let sel1_6:cpc.Selection = new cpc.Selection();
        sel1_6.id = "6";
        sel1_6.value = "0.6892";

        // line 1 axis 7
        let sel1_7:cpc.Selection = new cpc.Selection();
        sel1_7.id = "7";
        sel1_7.value = "36";

        // line 1 selections
        let sel1:Array<cpc.Selection> = new Array<cpc.Selection>();
        sel1.push(sel1_1);
        sel1.push(sel1_2);
        sel1.push(sel1_3);
        sel1.push(sel1_4);
        sel1.push(sel1_5);
        sel1.push(sel1_6);
        sel1.push(sel1_7);
        line1.selections = sel1;
        line1.css_class = "lines_a";

        this.ds.lines.push(line1);

        // line 2
        let line2:cpc.Line = new cpc.Line();
        line2.id = "l_2";
        line2.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.37449319148936167"},{"id":"1_1_3","value":"1.9702127659574469"}]},{"id":"2","value":"2_1","selections":[{"id":"2_1_1","value":"2_1_1_3","selections":[]},{"id":"2_1_2","value":"2_1_2_3"}]},{"id":"3","value":"3_1","selections":[{"id":"3_1_1","value":"3_1_1_1"},{"id":"3_1_2","value":"3_1_2_2"},{"id":"3_1_3","value":"3_1_3_1"},{"id":"3_1_4","value":"3_1_4_2"}]},{"id":"4","value":"4_2","selections":[{"id":"4_2_1","value":"4_2_1_1"},{"id":"4_2_2","value":"4_2_2_1"},{"id":"4_2_3","value":"31.54857142857143"},{"id":"4_2_4","value":"63.22857142857143"},{"id":"4_2_5","value":"4_2_5_1"}]},{"id":"5","value":"0.8959816220947896"},{"id":"6","value":"0.7762899667330768"},{"id":"7","value":"33.341262261998118"}]`);
        line2.css_class = "lines_a";
        this.ds.lines.push(line2);

        // line 3
        let line3:cpc.Line = new cpc.Line();
        line3.id = "l_3";
        line3.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.3787476595744681"},{"id":"1_1_3","value":"1.9702127659574469"}]},{"id":"2","value":"2_1","selections":[{"id":"2_1_1","value":"2_1_1_3"},{"id":"2_1_2","value":"2_1_2_3"}]},{"id":"3","value":"3_1","selections":[{"id":"3_1_1","value":"3_1_1_1"},{"id":"3_1_2","value":"3_1_2_2"},{"id":"3_1_3","value":"3_1_3_1"},{"id":"3_1_4","value":"3_1_4_2"}]},{"id":"4","value":"4_2","selections":[{"id":"4_2_1","value":"4_2_1_2"},{"id":"4_2_2","value":"4_2_2_2"},{"id":"4_2_3","value":"75.6742857142857"},{"id":"4_2_4","value":"22.49714285714286"},{"id":"4_2_5","value":"4_2_5_4"}]},{"id":"5","value":"0.17450820667321199"},{"id":"6","value":"0.047093351103292935"},{"id":"7","value":"3.001369864106107"}]`);
        line3.css_class = "lines_a";
        this.ds.lines.push(line3);

        // line 4
        let line4:cpc.Line = new cpc.Line();
        line4.id = "l_4";
        line4.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.12347957446808507"},{"id":"1_1_3","value":"1.9829787234042553"}]},{"id":"2","value":"2_2"},{"id":"3","value":"3_2"},{"id":"4","value":"4_4","selections":[{"id":"4_4_1","value":"4_4_1_2","selections":[]},{"id":"4_4_2","value":"4_4_2_2"},{"id":"4_4_3","value":"4_4_3_2"},{"id":"4_4_4","value":"3.5999999999999996"},{"id":"4_4_5","value":"4_4_5_2"}]},{"id":"5","value":"0.641674841076906"},{"id":"6","value":"0.7123498342330647"},{"id":"7","value":"50.75399562832211"}]`);
        line4.css_class = "lines_b";
        this.ds.lines.push(line4);

        // line 5
        let line5:cpc.Line = new cpc.Line();
        line5.id = "l_5";
        line5.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.22558680851063828"},{"id":"1_1_3","value":"1"}]},{"id":"2","value":"2_1","selections":[{"id":"2_1_1","value":"2_1_1_1","selections":[]},{"id":"2_1_2","value":"2_1_2_1"}]},{"id":"3","value":"3_1","selections":[{"id":"3_1_1","value":"3_1_1_2"},{"id":"3_1_2","value":"3_1_2_2"},{"id":"3_1_3","value":"3_1_3_2"},{"id":"3_1_4","value":"3_1_4_1"}]},{"id":"4","value":"4_3","selections":[{"id":"4_3_1","value":"245.71428571428567"},{"id":"4_3_2","value":"371.42857142857144"},{"id":"4_3_3","value":"142.85714285714292"},{"id":"4_3_4","value":"4_3_4_1"}]},{"id":"5","value":"0.8231263382765501"},{"id":"6","value":"0.6144617051731813"},{"id":"7","value":"33.49043253280786"}]`);
        line5.css_class = "lines_b";
        this.ds.lines.push(line5);

        // line 6
        let line6:cpc.Line = new cpc.Line();
        line6.id = "l_6";
        line6.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.10646170212765962"},{"id":"1_1_3","value":"1.9829787234042553"}]},{"id":"2","value":"2_1","selections":[{"id":"2_1_1","value":"2_1_1_3"},{"id":"2_1_2","value":"2_1_2_3"}]},{"id":"3","value":"3_1","selections":[{"id":"3_1_1","value":"3_1_1_1"},{"id":"3_1_2","value":"3_1_2_2"},{"id":"3_1_3","value":"3_1_3_1"},{"id":"3_1_4","value":"3_1_4_2"}]},{"id":"4","value":"4_3","selections":[{"id":"4_3_1","value":"234.2857142857143"},{"id":"4_3_2","value":"360"},{"id":"4_3_3","value":"154.28571428571425"},{"id":"4_3_4","value":"4_3_4_1"}]},{"id":"5","value":"0.961097245960913815"},{"id":"6","value":"0.93984196034469267"},{"id":"7","value":"20.60721097308071"}]`);
        line6.css_class = "lines_b";
        this.ds.lines.push(line6);

        // line 7
        let line7:cpc.Line = new cpc.Line();
        line7.id = "l_7";
        line7.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.3787476595744681"},{"id":"1_1_3","value":"1.9702127659574469"}]},{"id":"2","value":"2_1","selections":[{"id":"2_1_1","value":"2_1_1_3"},{"id":"2_1_2","value":"2_1_2_3"}]},{"id":"3","value":"3_1","selections":[{"id":"3_1_1","value":"3_1_1_1"},{"id":"3_1_2","value":"3_1_2_2"},{"id":"3_1_3","value":"3_1_3_1"},{"id":"3_1_4","value":"3_1_4_1"}]},{"id":"4","value":"4_3","selections":[{"id":"4_3_1","value":"280"},{"id":"4_3_2","value":"394.2857142857142"},{"id":"4_3_3","value":"154.28571428571425"},{"id":"4_3_4","value":"4_3_4_1"}]},{"id":"5","value":"0.9015508220841792"},{"id":"6","value":"0.9187260474687775"},{"id":"7","value":"22.39476641111108"}]`);
        line7.css_class = "lines_c";
        this.ds.lines.push(line7);

        // line 8
        let line8:cpc.Line = new cpc.Line();
        line8.id = "l_8";
        line8.selections = JSON.parse(`[{"id":"1","value":"1_1","selections":[{"id":"1_1_1","value":"1_1_1_1"},{"id":"1_1_2","value":"0.8637570212765958"},{"id":"1_1_3","value":"3.5404255319148934"}]},{"id":"2","value":"2_1","selections":[{"id":"2_1_1","value":"2_1_1_2"},{"id":"2_1_2","value":"2_1_2_2"}]},{"id":"3","value":"3_1","selections":[{"id":"3_1_1","value":"3_1_1_1"},{"id":"3_1_2","value":"3_1_2_1"},{"id":"3_1_3","value":"3_1_3_1"},{"id":"3_1_4","value":"3_1_4_2"}]},{"id":"4","value":"4_4","selections":[{"id":"4_4_1","value":"4_4_1_1"},{"id":"4_4_2","value":"4_4_2_1"},{"id":"4_4_3","value":"4_4_3_1"},{"id":"4_4_4","value":"12"},{"id":"4_4_5","value":"4_4_5_2","selections":[]}]},{"id":"5","value":"0.4195561475754828"},{"id":"6","value":"0.3951727865164892"},{"id":"7","value":"4.00920445775498"}]`);
        line8.css_class = "lines_c";
        this.ds.lines.push(line8);
    }

    get = ():cpc.Dataset => {
        return this.ds;
    }
}
