//dhtmlx 스크립트 가져오기 그리드 스크립트
let sptBringPop;
dhtmlxEvent(window, "load", () => {
    sptBringPop = new dhtmlXGridObject("sptBringGrid");
    sptBringPop.enableColumnAutoSize(true);
    sptBringPop.enableAutoWidth(true);
    sptBringPop.setImagePath("../dHtmlxSuite/codebase/imgs/");
    sptBringPop.init();
    sptBringPop.load("../../dataset/sptSel/sptBringPop.json", "json");
});

//dhtmlx 스크립트 복사 그리드 스크립트
let sptCopyPop;
dhtmlxEvent(window, "load", () => {
    sptCopyPop = new dhtmlXGridObject("sptCopyGrid");
    sptCopyPop.enableColumnAutoSize(true);
    sptCopyPop.enableAutoWidth(true);
    sptCopyPop.setImagePath("../dHtmlxSuite/codebase/imgs/");
    sptCopyPop.init();
    sptCopyPop.load("../../dataset/sptSel/sptBringPop.json", "json");
});


function sptAuthPopup() {
    document.getElementById("sptAuthPop").style.display = "";
}