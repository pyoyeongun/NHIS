// TTS, TTV, 육성 체크 박스 체크되었을때 이미지 변경
function changeCheckBox(event) {
    let changeSpanClass = document.getElementsByName(event.value);
    let checkOnClass = document.getElementsByClassName("checkboxCircleOnBtn");
    for (let i = 0; i < checkOnClass.length; i++) {
        checkOnClass[i].classList.add("checkboxCircleOffBtn");
        checkOnClass[i].classList.remove("checkboxCircleOnBtn");
    }
    console.log(changeSpanClass[0]);
    if (event.checked) {
        changeSpanClass[0].classList.remove("checkboxCircleOffBtn");
        changeSpanClass[0].classList.add("checkboxCircleOnBtn");
    }
    else {
        changeSpanClass[0].classList.remove("checkboxCircleOnBtn");
        changeSpanClass[0].classList.add("checkboxCircleOffBtn");
    }
}


//dhtmlx 운용상품 안내 그리드 스크립트
let grid;
dhtmlxEvent(window, "load", () => {
    grid = new dhtmlXGridObject("prdInfo");
    grid.enableColumnAutoSize(true);
    grid.enableAutoWidth(true);
    grid.enableAutoHeight(true);
    grid.setAwaitedRowHeight(40);
    grid.setImagePath("./dHtmlxSuite/codebase/imgs/");
    grid.init();
    grid.load("./dataset/faceRdData.json", "json");
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
