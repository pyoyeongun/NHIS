// select 박스 순차 선택 js
function gpAddPopOnload() {
    let unit = document.getElementsByName("unit");
    let high = document.getElementsByName("high");
    let middle = document.getElementsByName("middle");

    let unitValue = unit[0].options[unit[0].selectedIndex].value;
    console.log(unitValue);
    let highValue = high[0].options[high[0].selectedIndex].value;
    console.log(highValue);

    if (unitValue != "") {
        high[0].style.backgroundColor = "#FFFFFF";
        high[0].disabled = false;

        if (highValue != "") {
            middle[0].style.backgroundColor = "#FFFFFF";
            middle[0].disabled = false;
        }
        else {
            middle[0].style.backgroundColor = "#EAEAEA";
            middle[0].disabled = true;
        }
    }
    else {
        middle[0].style.backgroundColor = "#EAEAEA";
        middle[0].disabled = true;
        high[0].style.backgroundColor = "#EAEAEA";
        high[0].disabled = true;
    }
}

//  패스워드 정채 설정 select 미선택 이벤트 js
function pwdPrtySetPopOnload() {
    let pwPry = document.getElementsByName("pwPry");
    let pwChCycle = document.getElementsByName("pwChCycle");
    let chCycleSet = document.getElementsByName("chCycleSet");
    let prevPwdSet = document.getElementsByName("prevPwdSet");
    let pwAgreeCnt = document.getElementsByName("pwAgreeCnt");
    let tryLimit = document.getElementsByName("tryLimit");
    let tryLimitCnt = document.getElementsByName("tryLimitCnt");
    let accLock = document.getElementsByName("accLock");
    let lockCycleSet = document.getElementsByName("lockCycleSet");

    let pwPryValue = pwPry[0].options[pwPry[0].selectedIndex].value;
    let pwChCycleValue = pwChCycle[0].options[pwChCycle[0].selectedIndex].value;
    let prevPwdSetValue = prevPwdSet[0].options[prevPwdSet[0].selectedIndex].value;
    let tryLimitValue = tryLimit[0].options[tryLimit[0].selectedIndex].value; prevPwdSet
    let accLockValue = accLock[0].options[accLock[0].selectedIndex].value;
    // PW정책 사용
    if (pwPryValue == "미사용") {
        pwChCycle[0].style.backgroundColor = "#EAEAEA";
        pwChCycle[0].disabled = true;
        chCycleSet[0].style.backgroundColor = "#EAEAEA";
        chCycleSet[0].disabled = true;
        chCycleSet[1].style.backgroundColor = "#EAEAEA";
        chCycleSet[1].disabled = true;
        prevPwdSet[0].style.backgroundColor = "#EAEAEA";
        prevPwdSet[0].disabled = true;
        pwAgreeCnt[0].style.backgroundColor = "#EAEAEA";
        pwAgreeCnt[0].disabled = true;
        tryLimit[0].style.backgroundColor = "#EAEAEA";
        tryLimit[0].disabled = true;
        tryLimitCnt[0].style.backgroundColor = "#EAEAEA";
        tryLimitCnt[0].disabled = true;
        accLock[0].style.backgroundColor = "#EAEAEA";
        accLock[0].disabled = true;
        lockCycleSet[0].style.backgroundColor = "#EAEAEA";
        lockCycleSet[0].disabled = true;
        lockCycleSet[1].style.backgroundColor = "#EAEAEA";
        lockCycleSet[1].disabled = true;
    }
    else {
        pwChCycle[0].style.backgroundColor = "#FFFFFF";
        pwChCycle[0].disabled = false;
        chCycleSet[0].style.backgroundColor = "#FFFFFF";
        chCycleSet[0].disabled = false;
        chCycleSet[1].style.backgroundColor = "#FFFFFF";
        chCycleSet[1].disabled = false;
        prevPwdSet[0].style.backgroundColor = "#FFFFFF";
        prevPwdSet[0].disabled = false;
        pwAgreeCnt[0].style.backgroundColor = "#FFFFFF";
        pwAgreeCnt[0].disabled = false;
        tryLimit[0].style.backgroundColor = "#FFFFFF";
        tryLimit[0].disabled = false;
        tryLimitCnt[0].style.backgroundColor = "#FFFFFF";
        tryLimitCnt[0].disabled = false;
        accLock[0].style.backgroundColor = "#FFFFFF";
        accLock[0].disabled = false;
        lockCycleSet[0].style.backgroundColor = "#FFFFFF";
        lockCycleSet[0].disabled = false;
        lockCycleSet[1].style.backgroundColor = "#FFFFFF";
        lockCycleSet[1].disabled = false;
    }
    // PW변경주기
    if (pwChCycleValue == "미사용") {
        chCycleSet[0].style.backgroundColor = "#EAEAEA";
        chCycleSet[0].disabled = true;
        chCycleSet[1].style.backgroundColor = "#EAEAEA";
        chCycleSet[1].disabled = true;
    }
    else {
        chCycleSet[0].style.backgroundColor = "#ffffff";
        chCycleSet[0].disabled = false;
        chCycleSet[1].style.backgroundColor = "#ffffff";
        chCycleSet[1].disabled = false;
    }
    // 이전PW사용
    if (prevPwdSetValue == "차단") {
        pwAgreeCnt[0].style.backgroundColor = "#EAEAEA";
        pwAgreeCnt[0].disabled = true;
    }
    else {
        pwAgreeCnt[0].style.backgroundColor = "#FFFFFF";
        pwAgreeCnt[0].disabled = false;
    }
    // 시도제한
    if (tryLimitValue == "미사용") {
        tryLimitCnt[0].style.backgroundColor = "#EAEAEA";
        tryLimitCnt[0].disabled = true;
    }
    else {
        tryLimitCnt[0].style.backgroundColor = "#FFFFFF";
        tryLimitCnt[0].disabled = false;
    }
    // 계정잠금
    if (accLockValue == "미사용") {
        lockCycleSet[0].style.backgroundColor = "#EAEAEA";
        lockCycleSet[0].disabled = true;
        lockCycleSet[1].style.backgroundColor = "#EAEAEA";
        lockCycleSet[1].disabled = true;
    }
    else {
        lockCycleSet[0].style.backgroundColor = "#FFFFFF";
        lockCycleSet[0].disabled = false;
        lockCycleSet[1].style.backgroundColor = "#FFFFFF";
        lockCycleSet[1].disabled = false;
    }

}

function init() {
    pwdPrtySetPopOnload();
    gpAddPopOnload();
}