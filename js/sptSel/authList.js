//dhtmlx 결재목록 그리드 스크립트
let authList;
dhtmlxEvent(window, "load", () => {
    authList = new dhtmlXGridObject("authList");
    authList.enableColumnAutoSize(true);
    authList.enableAutoWidth(true);
    authList.setImagePath("../../dHtmlxSuite/codebase/imgs/");
    authList.init();
    authList.load("../../dataset/sptSel/authList.json", "json");
    //스크립트 결제 페이지 이동
    authList.attachEvent("onRowSelect", () => {
        let link = "./sptAuth.html";
        location.href = link;
    });
});