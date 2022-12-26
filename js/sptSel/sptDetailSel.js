// 수정하기 버튼 클릭 이벤트
function sptModify() {
    let link = "./sptDetailSelMd.html";
    location.href = link;
}
// 스크립트 수정하기에서 취소 누를시 스크립트 조회 페이지로 이동
function sptDetailSelBack() {
    let link = "./sptDetailSel.html";
    location.href = link;
}

//목록 보기
function gobackList() {
    let link = "./scriptSel.html";
    location.href = link;
}

//스크립트 가져오기 팝업
function sptBringPopup() {
    document.getElementById("sptBringPop").style.display = "";
}
//스크립트 복사 팝업
function sptCopyPopup() {
    document.getElementById("sptCopyPop").style.display = "";
}
//결재 의뢰 팝업 
function sptAuthPopup() {
    document.getElementById("sptAuthPop").style.display = "";
}

// 미리듣기 버튼 클릭 이벤트
function aheadListen() {
    document.getElementsByClassName("sptPlayer")[0].style.display = "";
    document.getElementsByClassName("footerBox")[0].style.display = "none";
}

