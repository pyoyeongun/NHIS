//dhtmlx 사용자 관리 리스트 그리드 스크립트
let systemLog;
dhtmlxEvent(window, "load", () => {
    systemLog = new dhtmlXGridObject("userMgList");
    systemLog.enableColumnAutoSize(true);
    systemLog.enableAutoWidth(true);
    systemLog.setImagePath("../dHtmlxSuite/codebase/imgs/");
    systemLog.init();
    systemLog.load("../../dataset/system/userMg.json", "json");
});


let groupTreeView;
dhtmlxEvent(window, "load", () => {
    groupTreeView = new dhtmlXTreeView("groupTreeView");
    groupTreeView.loadStruct("../../dataset/side/groupMg.json");
});

// 그룹 추가 팝업
function groupAddPopup() {
    document.getElementById("groupAddPop").style.display = "";
}

// 그룹 수정 팝업
function groupMdPopup() {
    document.getElementById("groupMdPop").style.display = "";
}

// 비밀번호 정책 설정 팝업
function pwdPrySetPopup() {
    document.getElementById("pwdPrySetPop").style.display = "";
}

// 사용자 추가 팝업
function userAddPopup() {
    document.getElementById("userAddPop").style.display = "";
}
// 사용자 수정 팝업
function userMgPopup() {
    document.getElementById("userMgPop").style.display = "";
}