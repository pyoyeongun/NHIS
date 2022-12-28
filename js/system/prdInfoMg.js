//dhtmlx 접근권한 리스트 그리드 스크립트
let prdInfoList;
dhtmlxEvent(window, "load", () => {
    prdInfoList = new dhtmlXGridObject("prdInfoList");
    prdInfoList.enableColumnAutoSize(true);
    prdInfoList.enableAutoWidth(true);
    prdInfoList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    prdInfoList.init();
    prdInfoList.load("../../dataset/system/prdInfoList.json", "json");
});


function setValueAddPopup() {
    document.getElementById("setValueAddPop").style.display = "";
}