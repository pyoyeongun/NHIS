//dhtmlx 접근권한 리스트 그리드 스크립트
let systemLog;
dhtmlxEvent(window, "load", () => {
    systemLog = new dhtmlXGridObject("systemLog");
    systemLog.enableColumnAutoSize(true);
    systemLog.enableAutoWidth(true);
    systemLog.setImagePath("../dHtmlxSuite/codebase/imgs/");
    systemLog.init();
    systemLog.load("../../dataset/system/systemLog.json", "json");
});
