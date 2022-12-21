// 모든 체크박스 선택
const checkboxes = document.getElementsByName("isChecked");
function selectAll(selectAll) {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
    selectLine();
}

// 선택된 라인 색변경 합수
let ev_material = document.getElementsByClassName("ev_material");
let odd_material = document.getElementsByClassName("odd_material");
function selectLine() {
    for (let i = 0; i < (odd_material.length - 2) * 2; i++) {
        console.log(i + " : " + checkboxes[i]);
        console.log(i / 2);
        console.log(odd_material.length - 2);
        if (checkboxes[i].checked) {
            if (i % 2 == 0) {
                console.log("홀수");
                ev_material[parseInt(i / 2)].style.backgroundColor = "#EDF7F6 !important";
            }
            else {
                console.log("짝");
                odd_material[parseInt(i / 2)].style.backgroundColor = "#EDF7F6 !important";
            }
        }
        else {
            if (i % 2 == 0) {
                console.log("홀수");
                ev_material[parseInt(i / 2)].style.backgroundColor = "#ffffff";
            }
            else {
                console.log("짝");
                odd_material[parseInt(i / 2)].style.backgroundColor = "#F8F8F8";
            }
        }
    }
}
function init() {
    for (let i = 0; i < ev_material.length; i++) {
        ev_material[i].addEventListener("load", selectLine);
        odd_material[i].addEventListener("load", selectLine);
    }
}
init();