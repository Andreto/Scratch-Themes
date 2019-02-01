var changeData = [
  ["gui_menu-bar-position_3U1T0", "#21252b"],
  ["gui_body-wrapper_-N0sA", "#282c34"],
  ["blocklyToolboxDiv", "#21252b"],
  ["scratchCategoryMenu", "#21252b"],
  ["sprite-selector_sprite-selector_2KgCX", "#3a3f4b"],
  ["sprite-info_sprite-info_3EyZh", "#21252b"],
  ["stage-selector_stage-selector_3oWOr", "#3a3f4b"],
  ["stage-selector_header_2GVr1", "#21252b"],
  ["gui_tab_27Unf", "#21252b"],
  ["blocklySvg", "#3a3f4b"]
]

for (i=0; i < changeData.length; i++){
  var elems = document.getElementsByClassName(changeData[i][0]);
  for (var ii = 0; ii < elems.length; ii++) {
    elems[ii].style.background = changeData[i][1];
  }
}

var elems = document.getElementsByTagName("input");
for (var ii = 0; ii < elems.length; ii++) {
  elems[ii].style.background = "#3a3f4b";
}
