//dhtmlx 녹취 조회 그리드 스크립트
let grid;
dhtmlxEvent(window, "load", () => {
    grid = new dhtmlXGridObject("rcdSel");
    grid.enableColumnAutoSize(true);
    grid.enableAutoWidth(true);
    grid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    grid.init();
    grid.load("../dataset/rcdSel.json", "json");
});

// 청취 레이어 팝업 스크립트
function listenPopup() {
    document.getElementById("listenPop").style.display = "";
}