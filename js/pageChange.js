/*
    파일명: pageChange.js
    작성일: 2022.12.14
    작성자: 표영운
    수정내용:
    내용: 페이지 변경관련 자바스크립트 파일
*/

/* 숫자 클릭 */
let listClick = document.getElementsByClassName("pageNum");
function currentMovePage(event) {
    if (event.target.classList[1] === "currentMovePage") {
        event.target.classList.remove("currentMovePage")
    } else {
        for (let i = 0; i < listClick.length; i++) {
            listClick[i].classList.remove("currentMovePage");
        }
        event.target.classList.add("currentMovePage");
    }
}
/* 오른쪽 페이지 넘기기 버튼 */
let pageText = document.getElementsByName("pageText");
let currentPage = 0;
function pageMove(event) {
    let pageStartMoveBtn = document.getElementById("pageStartMove");
    let pageLeftMoveBtn = document.getElementById("pageLeftMove");
    let pageRightMoveBtn = document.getElementById("pageRightMove");
    let pageEndMoveBtn = document.getElementById("pageEndMove");
    let listLength = listClick.length;
    let nextPage = 0;
    let prevPage = 0;

    console.log("클릭");
    for (let i = 0; i < listLength; i++) {
        if (listClick[i].classList[1] === "currentMovePage") {
            currentPage = i;
            console.log("현재페이지: " + currentPage);
        }
    }
    if (event == "pageStartMove") {
        console.log(event);
        listClick[currentPage].classList.remove("currentMovePage");
        listClick[0].classList.add("currentMovePage");
        // 왼쪽 버튼 비활성화;
        pageLeftMoveBtn.classList.remove("leftArrBlackImg");
        pageStartMoveBtn.classList.remove("startArrBlackImg");
        pageLeftMoveBtn.classList.add("leftArrGrayImg");
        pageStartMoveBtn.classList.add("startArrGrayImg");
        // 오른쪽 버튼 활성화
        pageRightMoveBtn.classList.remove("rightArrGrayImg");
        pageEndMoveBtn.classList.remove("endArrGrayImg");
        pageRightMoveBtn.classList.add("rightArrBlackImg");
        pageEndMoveBtn.classList.add("endArrBlackImg");

    }

    else if (event == "pageLeftMove") {
        if (listClick[0].classList[1] === "currentMovePage") {
            listClick[currentPage].classList.remove("currentMovePage");
            listClick[0].classList.add("currentMovePage");
        }
        else {
            listClick[currentPage].classList.remove("currentMovePage");
            listClick[currentPage - 1].classList.add("currentMovePage");

            if (0 == currentPage - 1) {
                // 왼쪽 버튼 비활성화
                pageLeftMoveBtn.classList.remove("leftArrBlackImg");
                pageStartMoveBtn.classList.remove("startArrBlackImg");
                pageLeftMoveBtn.classList.add("leftArrGrayImg");
                pageStartMoveBtn.classList.add("startArrGrayImg");
                // 오른쪽 버튼 활성화
                pageRightMoveBtn.classList.remove("rightArrGrayImg");
                pageEndMoveBtn.classList.remove("endArrGrayImg");
                pageRightMoveBtn.classList.add("rightArrBlackImg");
                pageEndMoveBtn.classList.add("endArrBlackImg");
            }
            else if (currentPage < listLength) {
                // 오른쪽 버튼 활성화
                pageRightMoveBtn.classList.remove("rightArrGrayImg");
                pageEndMoveBtn.classList.remove("endArrGrayImg");
                pageRightMoveBtn.classList.add("rightArrBlackImg");
                pageEndMoveBtn.classList.add("endArrBlackImg");
            }
        }
    }

    else if (event == "pageRightMove") {
        if (listClick[listLength - 1].classList[1] === "currentMovePage") {
            console.log(event);
            listClick[currentPage].classList.remove("currentMovePage");
            listClick[listLength - 1].classList.add("currentMovePage");
        }
        else {
            listClick[currentPage].classList.remove("currentMovePage");
            listClick[currentPage + 1].classList.add("currentMovePage");
            nextPage = currentPage + 1;
            console.log(listLength - 1);
            if (listLength - 1 == nextPage) {
                // 오른쪽 버튼 비활성화
                pageRightMoveBtn.classList.remove("rightArrBlackImg");
                pageEndMoveBtn.classList.remove("endArrBlackImg");
                pageRightMoveBtn.classList.add("rightArrGrayImg");
                pageEndMoveBtn.classList.add("endArrGrayImg");
                // 왼쪽 버튼 활성화
                pageLeftMoveBtn.classList.remove("leftArrGrayImg");
                pageStartMoveBtn.classList.remove("startArrGrayImg");
                pageLeftMoveBtn.classList.add("leftArrBlackImg");
                pageStartMoveBtn.classList.add("startArrBlackImg");
            }
            else if (0 < nextPage) {
                // 왼쪽 버튼 활성화
                pageLeftMoveBtn.classList.remove("leftArrGrayImg");
                pageStartMoveBtn.classList.remove("startArrGrayImg");
                pageLeftMoveBtn.classList.add("leftArrBlackImg");
                pageStartMoveBtn.classList.add("startArrBlackImg");
            }
        }
    }
    else if (event == "pageEndMove") {
        listClick[currentPage].classList.remove("currentMovePage");
        listClick[listLength - 1].classList.add("currentMovePage")
        prevPage = listLength - 2;
        console.log(prevPage);
        // 오른쪽 버튼 비활성화;
        pageRightMoveBtn.classList.remove("rightArrBlackImg");
        pageEndMoveBtn.classList.remove("endArrBlackImg");
        pageRightMoveBtn.classList.add("rightArrGrayImg");
        pageEndMoveBtn.classList.add("endArrGrayImg");
        // 왼쪽 버튼 활성화
        pageLeftMoveBtn.classList.remove("leftArrGrayImg");
        pageStartMoveBtn.classList.remove("startArrGrayImg");
        pageLeftMoveBtn.classList.add("leftArrBlackImg");
        pageStartMoveBtn.classList.add("startArrBlackImg");
    }
}