//dhtmlx 스크립트 조회 그리드 스크립트
let grid;
dhtmlxEvent(window, "load", () => {
    grid = new dhtmlXGridObject("sptList");
    grid.enableColumnAutoSize(true);
    grid.enableAutoWidth(true);
    grid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    grid.init();
    grid.load("../../dataset/sptList.json", "json");
    //스크립트 상세조회
    grid.attachEvent("onRowSelect", () => {
        let link = "../../page/scriptSel/sptDetailSel.html";
        location.href = link;
    });
});


//변경이력 보기
function showChangeList() {
    let link = "../../page/scriptSel/changeList.html";
    location.href = link;
}

