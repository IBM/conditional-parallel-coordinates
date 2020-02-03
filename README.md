# Conditional Parallel Coordinates [#IBM]( https://github.com/IBM )

Conditional Parallel Coordinates (CPC) are a generalization of the Parallel Coordinates visualization, where 
a categorical value on axes can be clicked, to expand another level of Parallel Coordinates on its behalf. The
additionally revealed information is conditioned on the clicked value. CPC is implemented recursively, 
such that categorical values in sub-axes can again be expanded.

CPC's original use is in the area of AI Automation, specifically to visualize machine learning pipelines and 
their respective hyperparameters simultaneously. However, other applications are way beyond our imagination, 
so we do not want to withhold this from you.

##### Version: 1.0.0

##### Contact: daniel.karl@ibm.com

### License
Please note the source code is published under terms of GPL-3. Therefore, should you intend to include CPC in your projects,
please make sure you openly publish your entire code base under the same terms. This might not suite your commercial project,
in which case you may kindly reach out to our legal staff at IBM Research to obtain a special license.

Further note that CPC currently has **2** pending patents, which means you cannot simply implement the protected principle(s)
of CPC yourself and use it in your projects without obtaining a license from IBM Research.

## Publications
- Weidele, Daniel Karl I. "Conditional Parallel Coordinates." 2019 IEEE Visualization Conference (VIS). IEEE, 2019.
- Weidele, Daniel Karl I., et al. "AutoAIViz: Opening the Blackbox of Automated Artificial Intelligence with Conditional Parallel Coordinates." 2020 ACM Intelligent User Interfaces (IUI). ACM, 2020.

## Users
### Default settings
```
// init CPC component (default settings)
let cpc:CPC = new CPC("my_dom_id", dataset);
```

### Custom settings
```
// init CPC component with custom settings
let config:CPCConfiguration = new CPCConfiguration();
config.rootCollapsible = false;
config.edgeRouting = true;
config.preferredPrecision = 3;
config.collapseOthersOnChoiceExpand = true;
config.deselectOthersOnLineSelect = true;
let cpc:CPC = new CPC("my_dom_id", dataset, config);
```

#### Configuration parameters

| Parameter | Type | default | Description | Since |
|---|---|---|---|---|
| rootCollapsible | bool | false | If true, visualization loads with a single choice, instead of expanded axes. | v1.0.0 |
| lineClickHandler | callback(e) | null | Callback, triggered when user selects a line. | v1.0.0 |
| preferredPrecision | int | 3 | Maximum number of decimals to display in labels. | v1.0.0 |
| edgeRouting | bool | true | If true, avoids intersections of polylines with expanded rectangles. | v1.0.0 |
| axisLabels | map | null | Override axis labels (*value*) by ID (*key*). | v1.0.0 |
| choiceLabels | map | null | Override choice labels (*value*) by ID (*key*). | v1.0.0 |
| collapseOthersOnChoiceExpand | bool | true | When user expands a choice, other choices are collapsed automatically. | v1.0.0 |
| deselectOthersOnLineSelect | bool | true | When user selects line, other lines are deselected automatically. | v1.0.0 |

### Acknowledgements
* The term *Conditional* has been thrown out by Hendrik Strobelt, after my complaint in the hallways of IBM Research about 
"Nested Parallel Coordinates" already being taken hostage by some related but different discovery. 
Clearly, "Conditional" was the term I was looking for.
* Deadline of the VIS 2019 submission was also the wedding date of Loraine Franke-Weidele. I am exhilarated for her having allowed me
to polish the revision in the morning, and still saying *Yes!* to my life only a few hours later.
