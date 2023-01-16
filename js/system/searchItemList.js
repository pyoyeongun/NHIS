//dhtmlx 조회 조건/항목 관리 스크립트
let searchItemList;
dhtmlxEvent(window, "load", () => {
    searchItemList = new dhtmlXGridObject("searchItemList");
    searchItemList.enableColumnAutoSize(true);
    searchItemList.enableAutoWidth(true);
    searchItemList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    searchItemList.init();
    searchItemList.load("../../dataset/system/searchItemList.json", "json");
});
let searchItemUsed;
dhtmlxEvent(window, "load", () => {
    searchItemUsed = new dhtmlXGridObject("searchItemUsed");
    searchItemUsed.enableColumnAutoSize(true);
    searchItemUsed.enableAutoWidth(true);
    searchItemUsed.setImagePath("../dHtmlxSuite/codebase/imgs/");
    searchItemUsed.init();
    searchItemUsed.load("../../dataset/system/searchItemUsed.json", "json");
});
let selItemList;
dhtmlxEvent(window, "load", () => {
    selItemList = new dhtmlXGridObject("selItemList");
    selItemList.enableColumnAutoSize(true);
    selItemList.enableAutoWidth(true);
    selItemList.setImagePath("../dHtmlxSuite/codebase/imgs/");
    selItemList.init();
    selItemList.load("../../dataset/system/selItemList.json", "json");
});
let selItemUsed;
dhtmlxEvent(window, "load", () => {
    selItemUsed = new dhtmlXGridObject("selItemUsed");
    selItemUsed.enableColumnAutoSize(true);
    selItemUsed.enableAutoWidth(true);
    selItemUsed.setImagePath("../dHtmlxSuite/codebase/imgs/");
    selItemUsed.init();
    selItemUsed.load("../../dataset/system/selItemUsed.json", "json");
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
