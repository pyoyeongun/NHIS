//dhtmlx 권한 관리 스크립트
let autgList;
dhtmlxEvent(window, "load", () => {
    autgList = new dhtmlXGridObject("autgList");
    autgList.enableColumnAutoSize(true);
    autgList.enableAutoWidth(true);
    autgList.setHeader(["그룹명", "메뉴명", "허용 권한", "#cspan", "#cspan", "#cspan", "#cspan", "#cspan",
        "허용 권한", "#cspan", "#cspan", "#cspan", "#cspan", "#cspan", "#cspan", "#cspan", "#cspan"]);
    autgList.attachHeader(["#rspan", "#rspan", "허용범위", "접근", "저장",
        "수정", "삭제", "청취", "파일 다운로드", "엑셀 다운로드", "1차승인", "2차승인", "최종승인",
        "다운로드 요청권한", "녹취 암호화", "파일 업로드", "우수사원 추가"]);
    autgList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    autgList.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
    autgList.setColAlign("center,center,center,center,center,center,center,center,center,center,center,center,center,center,center,center,center");
    autgList.setInitWidths("192, 162, 72, 66, 66, 66, 66, 66, 72, 76, 66, 66, 66, 84, 80, 80, 65");
    autgList.init();
    autgList.load("../../dataset/system/authGroupMgList.json", "json");
});

// 권한 그룹 리스트
let authGroupList;
dhtmlxEvent(window, "load", () => {
    authGroupList = new dhtmlXList(
        {
            container: "authGroupList",
            template: "<span class='folderImg'></span><p class='dhx_strong'>#name#</p>"
        }
    );

    authGroupList.load("../../dataset/side/authGroupList.json", "json");
});


// 권한그룹 추가 팝업
function authAddPopup() {
    document.getElementById("authAddPop").style.display = "";
}

// 권한그룹 수정 팝업
function authMdPopup() {
    document.getElementById("authMdPop").style.display = "";
}