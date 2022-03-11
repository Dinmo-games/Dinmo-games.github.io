var $start_container = document.querySelectorAll(".start_container");
document.getElementById("open_group").onclick = OpenGroup();
document.getElementById("play_game").onclick = Hide_Start_Screen();

function Hide_Start_Screen() {
    // document.getElementById("play_game").onclick = Hide_Start_Screen();
    console.log("HIDE");
    $start_container[0].style.zIndex = -100;
    $mobile_containers[0].style.display = "none";
}

function Show_Start_Screen() {
    $start_container[0].style.zIndex = 100;
    $mobile_containers[0].style.display = "flex";
}



function OpenGroup() {
    gs.socials.joinCommunity();
}