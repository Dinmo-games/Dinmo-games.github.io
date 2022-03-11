var $start_container = document.querySelectorAll(".start_container");

function Hide_Start_Screen() {
    $start_container[0].style.zIndex = -100;
    $start_container[0].style.display = "none";
}

function Show_Start_Screen() {
    $start_container[0].style.zIndex = 100;
    $start_container[0].style.display = "flex";
}



function OpenGroup() {
    gameS.socials.joinCommunity();
}