//dhtmlx 사용자 관리 리스트 그리드 스크립트
let gpMgList;
dhtmlxEvent(window, "load", () => {
    gpMgList = new dhtmlXGridObject("gpMgList");
    gpMgList.enableColumnAutoSize(true);
    gpMgList.enableAutoWidth(true);
    gpMgList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    gpMgList.init();
    gpMgList.load("../../dataset/system/gpMg.json", "json");
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
// 그룹 변경 팝업
function groupChPopup() {
    document.getElementById("groupChPop").style.display = "";
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