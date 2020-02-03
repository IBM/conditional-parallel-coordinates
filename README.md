# Conditional Parallel Coordinates
Conditional Parallel Coordinates (CPC) are a generalization of the Parallel Coordinates visualization, where 
categorical values on axes can be clicked, to expand another level of Parallel Coordinates recursively. The
additionally revealed information is conditioned on the clicked value. CPC is implemented recursively, 
such that categorical values in sub-axes can again be expanded.

##### Version: 1.0.0

##### Contact: daniel.karl@ibm.com

### Publications
- Weidele, Daniel Karl I. "Conditional Parallel Coordinates." 2019 IEEE Visualization Conference (VIS). IEEE, 2019.
- Weidele, Daniel Karl I., et al. "AutoAIViz: Opening the Blackbox of Automated Artificial Intelligence with Conditional Parallel Coordinates." arXiv preprint arXiv:1912.06723 (2019).

### Users
- Default settings
```
// init CPC component (default settings)
let cpc:CPC = new CPC("my_dom_id", dataset);
```

- Custom settings
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

- Configuration parameters

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
