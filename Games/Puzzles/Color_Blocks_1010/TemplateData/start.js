var $start_container = document.querySelector(".start_container");

function Hide_Start_Screen() {
    $start_container[0].style.zIndex = -100;
    $mobile_containers[0].style.display = "none";
}

function Show_Start_Screen() {
    $start_container[0].style.zIndex = 100;
    $mobile_containers[0].style.display = "flex";
}