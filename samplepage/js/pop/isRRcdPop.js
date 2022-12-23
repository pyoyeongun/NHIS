//dhtmlx 재녹취여부 그리드 스크립트
let rqAuthListGrid;
dhtmlxEvent(window, "load", () => {
    rqAuthListGrid = new dhtmlXGridObject("isRRcdGrid");
    rqAuthListGrid.enableColumnAutoSize(true);
    rqAuthListGrid.enableAutoWidth(true);
    rqAuthListGrid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    rqAuthListGrid.init();
    rqAuthListGrid.load("../../dataset/rcdSel.json", "json");
});
