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

// 재녹취 승인요청 팝업
function approveRqPopup() {
    document.getElementById("approveRqPop").style.display = "";
}

// 재녹취 승인으로인한 대면녹취 페이지 Open
function faceRdOpen() {
    let link = "../faceRd.html";
    location.href = link;
}

let testData = JSON.parse(JSON.stringify(STTTestFile));

html = "<div class='sttMessage'>"

//이미 녹취된 파일 재생 시 사용
for (let i = 0; i < testData.length; i++) {
    if (testData[i].epdtype == 1) {
        // 상담원 SST일 경우
        if (testData[i].rxtx == 1)
            html += "<div class='staffSTT'>" + testData[i].outputSTT + "</div>"
        // 고객 SST일 경우
        else
            html += "<div class='clientSTT'>" + testData[i.outputSTT + "</div>"]
    }
}
html += "</div>";

$(".popMain").append(html);