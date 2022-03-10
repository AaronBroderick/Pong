var singleText = document.getElementById("singleText");
var multiText = document.getElementById("multiText");
var title = document.getElementById("title");
var paddle1 = document.getElementById("paddle1");
var paddle2 = document.getElementById(["paddle2"]);
var paddleComputer = document.getElementById("paddleComputer");
var line = document.getElementById("line");
var ball = document.getElementById("ball");
var player1Score = document.getElementById("player1Score");
var player2Score = document.getElementById("player2Score");
var computerScore = document.getElementById("computerScore");

function clear() {
    singleText.style.display = "none";
    multiText.style.display = "none";
    title.style.display = "none";
}

function singleSetup() {
    paddle1.style.display = "block";
    paddleComputer.style.display = "block";
    line.style.display = "block";
    ball.style.display = "block";
    player1Score.style.display = "block";
    computerScore.style.display = "block";
}

function multiSetup() {
    paddle1.style.display = "block";
    paddle2.style.display = "block";
    line.style.display = "block";
    ball.style.display = "block";
    player1Score.style.display = "block";
    player2Score.style.display = "block";
}

function movePaddle() {
    document.addEventListener("keyup", function(e) {
        if (e.key === 'w') {
            paddle1.style.marginTop = "-100px";
        }
    });
    document.addEventListener("keyup", function(e) {
        if (e.key === 's') {
            paddle1.style.marginTop = "100px";
        }
    });
}

singleText.onclick = function() {clear(), singleSetup(), movePaddle()};
multiText.onclick = function() {clear(), multiSetup()};