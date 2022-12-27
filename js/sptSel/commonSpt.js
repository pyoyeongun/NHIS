//dhtmlx 스크립트 조회 그리드 스크립트
let commonSptGrid;
dhtmlxEvent(window, "load", () => {
    commonSptGrid = new dhtmlXGridObject("commonSpt");
    commonSptGrid.enableColumnAutoSize(true);
    commonSptGrid.enableAutoWidth(true);
    commonSptGrid.setImagePath("../../dHtmlxSuite/codebase/imgs/");
    commonSptGrid.init();
    commonSptGrid.load("../../dataset/sptSel/commonSpt.json", "json");
});


function authRqPopup() {
    document.getElementById("sptAuthPop").style.display = "";
}