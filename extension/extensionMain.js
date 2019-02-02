var changeData = [
  ["gui_menu-bar-position_3U1T0", "#21252b", "bgColor"],
  ["gui_body-wrapper_-N0sA", "#282c34", "bgColor"],
  ["blocklyToolboxDiv", "#21252b", "bgColor"],
  ["scratchCategoryMenu", "#21252b", "bgColor"],
  ["sprite-selector_sprite-selector_2KgCX", "#3a3f4b", "bgColor"],
  ["sprite-info_sprite-info_3EyZh", "#21252b", "bgColor"],
  ["stage-selector_stage-selector_3oWOr", "#3a3f4b", "bgColor"],
  ["stage-selector_header_2GVr1", "#21252b", "bgColor"],
  ["gui_tab_27Unf", "#21252b", "bgColor"],
  ["blocklySvg", "#3a3f4b", "bgColor"]
]

for (i=0; i < changeData.length; i++){
  var elems = document.getElementsByClassName(changeData[i][0]);
  for (var ii = 0; ii < elems.length; ii++) {
    if(changeData[i][2] == "bgColor"){
      elems[ii].style.background = changeData[i][1];
    }
  }
}

var elems = document.getElementsByTagName("input");
for (var ii = 0; ii < elems.length; ii++) {
  elems[ii].style.background = "#3a3f4b";
}
