var answer = window.prompt("Do you like photography? Answers:YES, NO");
function playAudio(){
    document.getElementById("xbox_360_achievement").play();
}

if (answer === "YES") {
    alert("Welcome!!");
} else if (answer === "NO") {
    alert(":(");
}