//dhtmlx 사용자 관리 리스트 그리드 스크립트
let sysCodeList;
dhtmlxEvent(window, "load", () => {
    sysCodeList = new dhtmlXGridObject("sysCodeList");
    sysCodeList.enableColumnAutoSize(true);
    sysCodeList.enableAutoWidth(true);
    sysCodeList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    sysCodeList.init();
    sysCodeList.load("../../dataset/system/sysCodeList.json", "json");
});

let groupTreeView;
dhtmlxEvent(window, "load", () => {
    groupTreeView = new dhtmlXTreeView("groupTreeView");
    groupTreeView.loadStruct("../../dataset/side/groupMg.json");
});

// 그룹 수정 팝업
function sysGpMdPopup() {
    document.getElementById("sysGpMdPop").style.display = "";
}

// 공통코드 추가 팝업
function commonCodeAddPopup() {
    document.getElementById("commonCodeAddPop").style.display = "";
}