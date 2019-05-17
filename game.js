var gamePattern = [];
var userClickedPattern = [];

    var buttonColours = ['red', 'blue', 'green', 'yellow'];
    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $(".btn").click(function(event) {
       var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        playSound(this.id);
        animatePress(this.id);

        setTimeout(function() {
            $(".btn").removeClass("pressed");
        }, 100);
    });

    function playSound(name) {
        var audio = new Audio("/sounds/"+name+".mp3");
        audio.play();
    }

    function animatePress(currentColour) {
        $("#"+currentColour).addClass("pressed");
    }