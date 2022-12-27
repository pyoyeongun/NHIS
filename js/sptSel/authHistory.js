//dhtmlx 결재목록 그리드 스크립트
let authHistory;
dhtmlxEvent(window, "load", () => {
    authHistory = new dhtmlXGridObject("authHistory");
    authHistory.enableColumnAutoSize(true);
    authHistory.enableAutoWidth(true);
    authHistory.setImagePath("../../dHtmlxSuite/codebase/imgs/");
    authHistory.init();
    authHistory.load("../../dataset/sptSel/authList.json", "json");
    // 결제이력 상세조회 페이지 이동
    authHistory.attachEvent("onRowSelect", () => {
        let link = "./authHistoryDt.html";
        location.href = link;
    });
});
