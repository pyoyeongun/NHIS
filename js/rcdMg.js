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

// 청취 요청 레이어 팝업 스크립트
function listenRqPopup() {
    document.getElementById("listenRqPop").style.display = "";
}
// 청취 요청 레이어 팝업 스크립트
function listenPopup() {
    document.getElementById("listenPop").style.display = "";

    listenRqPopdown();
}
// 녹취 파일 다운로드 신청서 팝업 스크립트
function rcdFileDlPopup() {
    document.getElementById("rcdFileDlPop").style.display = "";
}
// 청취/다운로드 요청 결재 목록 팝업 스크립트
function rqAuthListPopup() {
    document.getElementById("rqAuthListPop").style.display = "";
}
// 재녹취여부
function isRRcdPopup() {
    document.getElementById("isRRcdPop").style.display = "";
}