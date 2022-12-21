//dhtmlx 접근권한 리스트 그리드 스크립트
let grid;
dhtmlxEvent(window, "load", () => {
    grid = new dhtmlXGridObject("accAuthList");
    grid.enableColumnAutoSize(true);
    grid.enableAutoWidth(true);
    grid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    grid.init();
    grid.load("../../dataset/system/accessAuthList.json", "json");
});
