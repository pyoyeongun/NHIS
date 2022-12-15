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