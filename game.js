var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var i = 0;
if($(document).keypress(function(event) {
    if((event.key).toLowerCase() === 'a')
    nextSequence();
}));


$(".btn").click(function(event) {
    var userChosenColour = this.id;
     userClickedPattern.push(userChosenColour);
     console.log(userClickedPattern);
     playSound(this.id);
     animatePress(this.id);

     setTimeout(function() {
         $(".btn").removeClass("pressed");
     }, 100);

     checkAnswer(userClickedPattern.length-1);
 });

function nextSequence() {

    $("h1").text("Level "+i++);
    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("gamePattern:"+gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

    function playSound(name) {
        var audio = new Audio("/sounds/"+name+".mp3");
        audio.play();
    }

    function animatePress(currentColour) {
        $("#"+currentColour).addClass("pressed");
    }

function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        console.log("sucesss");

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 500);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver(currentLevel, gamePattern, userClickedPattern);
    }
}

function startOver(currentLevel, gamePattern, userClickedPattern) {
    i = 0;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
}