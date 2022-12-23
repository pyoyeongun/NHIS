function treeMenuOpen(event) {
    let menuList = document.getElementsByName('menu');
    for (let i = 0; i < menuList.length; i++) {
        console.log(menuList[i].className);
        menuList[i].classList.remove("currentMenu");
    }
    let treeName = event.dataset.value;

    if (event.dataset.value != null) {
        console.log("해당 메뉴는 트리이다.")
        event.className = "currentMenu";
        document.getElementsByName(treeName)[0].style.display = "";
        console.log(document.getElementsByName(treeName + "_1")[0]);
        document.getElementsByName(treeName + "_1")[0].className = "orangeText";
        document.getElementsByName(treeName + "_1")[1].className = "minusImg";
    }


    event.className = "currentMenu";
    console.log(event.name);
}
function treeSubMenuClick() {
    console.log("서브트리 클릭");
}