var script = document.createElement('script');

script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var changeData = [
  [".gui_menu-bar-position_3U1T0", "background-color", "#21252b"],
  [".gui_body-wrapper_-N0sA", "background-color", "#282c34"],
  [".blocklyToolboxDiv", "background-color", "#21252b"],
  [".scratchCategoryMenu", "background-color", "#21252b"],
  [".sprite-selector_sprite-selector_2KgCX", "background-color", "#3a3f4b"],
  [".sprite-info_sprite-info_3EyZh", "background-color", "#21252b"],
  [".stage-selector_stage-selector_3oWOr", "background-color", "#3a3f4b"],
  [".stage-selector_header_2GVr1", "background-color", "#21252b"],
  [".gui_tab_27Unf", "background-color", "#21252b"],
  [".blocklySvg", "background-color", "#3a3f4b"],
  [".categorySelected", "background-color", "#3a3f4b"],
  [".backpack_backpack-header_6ltCS", "background-color", "#21252b"],
  [".asset-panel_wrapper_366X0", "background-color", "#3a3f4b"],
  [".paint-editor_editor-container_1WLch", "background", "#3a3f4b"],
  [".asset-panel_wrapper_366X0", "background", "#3a3f4b"],
  ["input", "background-color", "#3a3f4b"]
]

$("body");

for (i=0; i < changeData.length; i++){
  $(changeData[i][0]).css(changeData[i][1], changeData[i][2]);
}
