//dhtmlx 결재목록 그리드 스크립트
let authHistory;
dhtmlxEvent(window, "load", () => {
    authHistory = new dhtmlXGridObject("authHistory");
    authHistory.enableColumnAutoSize(true);
    authHistory.enableAutoWidth(true);
    authHistory.setImagePath("../../dHtmlxSuite/codebase/imgs/");
    authHistory.init();
    authHistory.load("../../dataset/sptSel/authList.json", "json");
});
