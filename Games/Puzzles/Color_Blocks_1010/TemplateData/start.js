var $start_container = document.querySelectorAll(".start_container");

function Hide_Start_Screen() {
    // document.getElementById("play_game").onclick = Hide_Start_Screen();
    console.log("HIDE");
    $start_container[0].style.zIndex = -100;
    $start_container[0].style.display = "none";
}

function Show_Start_Screen() {
    $start_container[0].style.zIndex = 100;
    $start_container[0].style.display = "flex";
}



function OpenGroup() {
    console.log("GAME SCORE: " + gameS);
    gameS.socials.joinCommunity();
}