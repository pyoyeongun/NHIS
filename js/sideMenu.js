// 사이드 메뉴 트리구조 스크립트
function treeMenuOpen(event) {
    // 
    let menuList = document.getElementsByName('menu');
    let orangeText = document.getElementsByClassName("orangeText");
    let treeName = event.dataset.value;
    let tree = "tree";
    for (let i = 1; i < document.getElementsByName("treeMenu").length + 1; i++) {
        document.getElementsByName(tree + i)[0].style.display = "none";
        document.getElementsByName(tree + i + "_1")[1].className = "plusImg";
    }

    for (let i = 0; i < menuList.length; i++) {
        console.log(menuList[i].className);
        menuList[i].classList.remove("currentMenu");
        menuList[i].classList.remove("currentTreeMenu");
        for (let j = 0; j < orangeText.length; j++) {
            orangeText[j].classList.remove("orangeText");
        }
    }

    if (event.dataset.value != null) {
        console.log("해당 메뉴는 트리이다.")
        event.className = "currentTreeMenu";
        document.getElementsByName(treeName)[0].style.display = "";
        console.log(document.getElementsByName(treeName + "_2")[0]);
        document.getElementsByName(treeName + "_1")[1].className = "minusImg";
        document.getElementsByName(treeName + "_2")[0].className = "orangeText";
        document.getElementsByName(treeName + "_2_1")[0].style.display = "";
    }
    else {
        event.className = "currentMenu";

    }
}
// 사이드 메뉴 (서브 선택) 트리구조 스크립트
function treeSubMenuClick(event) {
    // 선택 메뉴의 루트 Name
    let treeNameRoot = event.dataset.value.split("_");
    // 선택 메뉴의 p 태그 Name
    let treeName = document.getElementsByName(treeNameRoot[0] + "_2");
    // 모든 휴지통 이미지 리스트
    let wastebasketList = document.getElementsByClassName("wastebasketImg");
    // 선택 메뉴의 휴지통 이미지 button 이름
    let treeWb = document.getElementsByName(event.dataset.value);
    // 모든 휴지통 이미지 비활성화(가리기);
    for (let i = 0; i < wastebasketList.length; i++) {
        wastebasketList[i].style.display = "none";
    }
    // 모든 오랜지색 text class 삭제
    for (let i = 0; i < treeName.length; i++) {
        console.log(treeName[i]);
        treeName[i].classList.remove("orangeText");
    }
    // 선택된 서브 메뉴 택스트 색 오랜지로 설정
    event.className = "orangeText";
    // 선택된 서브 메뉴 오른쪽 휴지통 이미지 활성화
    treeWb[0].style.display = "";
}