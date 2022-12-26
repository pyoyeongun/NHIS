//dhtmlx 결재목록 그리드 스크립트
let authList;
dhtmlxEvent(window, "load", () => {
    authList = new dhtmlXGridObject("authList");
    authList.enableColumnAutoSize(true);
    authList.enableAutoWidth(true);
    authList.setImagePath("../../dHtmlxSuite/codebase/imgs/");
    authList.init();
    authList.load("../../dataset/sptSel/authList.json", "json");
});
