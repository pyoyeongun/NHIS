// TTS, TTV, 육성 체크 박스 체크되었을때 이미지 변경
function changeCheckBox(event) {
    let changeSpanClass = document.getElementsByName(event.value);
    console.log(changeSpanClass[0]);
    if (event.checked) {
        changeSpanClass[0].classList.remove("checkboxOffBtn");
        changeSpanClass[0].classList.add("checkboxOnBtn");
    }
    else {
        changeSpanClass[0].classList.remove("checkboxOnBtn");
        changeSpanClass[0].classList.add("checkboxOffBtn");
    }
}

// 배속 변경시 css변경
function changePlaySpeed(event) {
    let allPlaySpd = document.getElementsByName(event.id);
    let spdList = document.getElementsByClassName("speedList")
    for (let i = 0; i < spdList.length; i++) {
        spdList[i].classList.remove("checkedPlaySpeed");
    }
    for (let i = 0; i < allPlaySpd.length; i++) {
        if (event.value == allPlaySpd[i].dataset.value) {
            console.log("선택 이벤트 값: " + event.value)
            allPlaySpd[i].classList.add("checkedPlaySpeed");
            continue;
        }
    }
}

//dhtmlx 운용상품 안내 그리드 스크립트
let grid;
let ta_center = "text-align: center";

dhtmlxEvent(window, "load", () => {
    grid = new dhtmlXGridObject("prdInfo");
    grid.setHeader("제목, 상태, 청취, 재녹취", null,
        [ta_center, ta_center, ta_center, ta_center]);
    grid.setColAlign("left, center, center, center");
    grid.setColTypes("tree, ro, ro, ro");
    grid.setInitWidths("594", "114", "114", "114");
    grid.enableColumnAutoSize(true);
    grid.enableAutoWidth(true);
    grid.enableAutoHeight(true);
    grid.setAwaitedRowHeight(40);
    grid.setImagePath("../dHtmlxSuite/codebase/imgs/");
    grid.init();
    grid.load("../dataset/faceRdData.xml");
});

//글자 크기 증가 스크립트
let scriptTextSize = 14;
let scriptLineHeight = 16;
let scriptTTSText = document.getElementsByClassName("ttsText");
let scriptAdvicerText = document.getElementsByClassName("adviceText");
let scriptClientText = document.getElementsByClassName("clientText");
function onClickScriptTxtSzDown() {
    console.log(scriptTTSText)
    console.log(scriptAdvicerText)
    console.log(scriptClientText)

    scriptTextSize--;
    scriptLineHeight = scriptLineHeight - 2;
    for (let i = 0; i < scriptTTSText.length; i++) {
        scriptTTSText[i].style.fontSize = scriptTextSize + "px";
    }
    for (let i = 0; i < scriptAdvicerText.length; i++) {
        scriptAdvicerText[i].style.fontSize = scriptTextSize + "px";
    }
    for (let i = 0; i < scriptClientText.length; i++) {
        scriptClientText[i].style.fontSize = scriptTextSize + "px";
    }
};
function onClickScriptTxtSzUp() {
    console.log(scriptTTSText)
    console.log(scriptAdvicerText)
    console.log(scriptClientText)
    scriptTextSize++;
    scriptLineHeight = scriptLineHeight + 2;
    for (let i = 0; i < scriptTTSText.length; i++) {
        scriptTTSText[i].style.fontSize = scriptTextSize + "px";
    }
    for (let i = 0; i < scriptAdvicerText.length; i++) {
        scriptAdvicerText[i].style.fontSize = scriptTextSize + "px";
    }
    for (let i = 0; i < scriptClientText.length; i++) {
        scriptClientText[i].style.fontSize = scriptTextSize + "px";
    }
};
