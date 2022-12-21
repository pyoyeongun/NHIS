//dhtmlx 청취 팝업 녹취목록 그리드 스크립트
let popGrid;
dhtmlxEvent(window, "load", () => {
    popGrid = new dhtmlXGridObject("rcdListGrid");
    popGrid.enableColumnAutoSize(true);
    popGrid.enableAutoWidth(true);
    popGrid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    popGrid.init();
    popGrid.load("../dataset/pop/rcdListPop.json", "json");
});
