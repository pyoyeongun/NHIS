//dhtmlx 청취/다운로드 요청 결재 목록 그리드 스크립트
let rqAuthListGrid;
dhtmlxEvent(window, "load", () => {
    rqAuthListGrid = new dhtmlXGridObject("rqAuthListGrid");
    rqAuthListGrid.enableColumnAutoSize(true);
    rqAuthListGrid.enableAutoWidth(true);
    rqAuthListGrid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    rqAuthListGrid.init();
    rqAuthListGrid.load("../dataset/pop/rqAuthList.json", "json");
});
