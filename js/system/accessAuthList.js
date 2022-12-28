//dhtmlx 접근권한 리스트 그리드 스크립트
let accAuthList;
dhtmlxEvent(window, "load", () => {
    accAuthList = new dhtmlXGridObject("accAuthList");
    accAuthList.enableColumnAutoSize(true);
    accAuthList.enableAutoWidth(true);
    accAuthList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    accAuthList.init();
    accAuthList.load("../../dataset/system/accessAuthList.json", "json");
});
