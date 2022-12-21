//dhtmlx 다운로드 조회 그리드 스크립트
let grid;
dhtmlxEvent(window, "load", () => {
    grid = new dhtmlXGridObject("dlList");
    grid.enableColumnAutoSize(true);
    grid.enableAutoWidth(true);
    grid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    grid.init();
    grid.load("../dataset/dlList.json", "json");
});
