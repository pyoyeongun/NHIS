//dhtmlx 청취/다운로드 요청 결재 목록 그리드 스크립트
let popGrid;
dhtmlxEvent(window, "load", () => {
    popGrid = new dhtmlXGridObject("rqAuthListGrid");
    popGrid.enableColumnAutoSize(true);
    popGrid.enableAutoWidth(true);
    popGrid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    popGrid.init();
    popGrid.load("../../dataset/pop/rqAuthList.json", "json");
});
