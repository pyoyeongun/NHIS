//dhtmlx 재녹취여부 그리드 스크립트
let isRRcdGrid;
dhtmlxEvent(window, "load", () => {
    isRRcdGrid = new dhtmlXGridObject("isRRcdGrid");
    isRRcdGrid.enableColumnAutoSize(true);
    isRRcdGrid.enableAutoWidth(true);
    isRRcdGrid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    isRRcdGrid.init();
    isRRcdGrid.load("../dataset/rcdSel.json", "json");
});
