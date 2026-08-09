var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var imageSource1 = "imagesdiece/" + randomDiceImage1;

document.querySelector(".img1").setAttribute("src", imageSource1);


// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var imageSource2 = "imagesdiece/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src", imageSource2);
//winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}