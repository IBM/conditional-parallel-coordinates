import * as $ from "jquery";
import {SampleDataset} from "./SampleDataset";
import * as _ds from "./../../src/ts/Dataset";
import {CPC} from "./../../src/ts/CPC";
import {CPCLine} from "./../../src/ts/CPCLine";
import {CPCConfiguration} from "./../../src/ts/CPCConfiguration";
import "./css/style.css";

$(document).ready(function() {

    // load data set
    let ds:_ds.Dataset = new SampleDataset().get();

    // init CPC component
    let config:CPCConfiguration = new CPCConfiguration();
    config.rootCollapsible = false;
    config.edgeRouting = true;
    config.preferredPrecision = 3;
    config.collapseOthersOnChoiceExpand = false;
    config.deselectOthersOnLineSelect = false;
    let cpc:CPC = new CPC("cpc", ds, config);

    $("a.toggleEditMode").click(function () {
        if(!cpc.isEditing()) {
            cpc.startEditing();
            console.log("draw line start");
            $(this).text("Stop draw line");
        } else {
            cpc.stopEditing(function (line:_ds.Line) {

                console.log("draw line end");

                let editLine:CPCLine = new CPCLine(cpc, line);
                cpc.pushLine(editLine);
                cpc.render();

                console.log(JSON.stringify(editLine.getSelections()));
            });
            $(this).text("Start draw linee");
        }
    });

    $("a.collapseAllChoices").click(function () {
        cpc.collapseAllChoices();
    });

    $("a.selectAllLines").click(function () {
        cpc.selectAllLines();
    });

    $("a.deselectAllLines").click(function () {
        cpc.deselectAllLines();
    });
});

