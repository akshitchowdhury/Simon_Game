// alert("WC to the Simon game")
var userClickedPattern = [];


var gamePattern = []



var buttoncolors = ["red", "blue", "green", "yellow"]

var started = false;

var level = 0


$(document).keydown(function(){
    if(!started){

        $("#level-title").text("Level " + level);
   
    nextSequence()
   
    started = true


}})

$(".btn").click(function (){
    
    
    var userChosenColor =   $(this).attr("id");

    userClickedPattern.push(userChosenColor)
    

    playSound(userChosenColor)

animatePress(userChosenColor)





})


function nextSequence(){


    level++;
    
    $("#level-title").text("Level " + level);
    

    var randomnumber = Math.floor(Math.random()*4)




var randomChosenColour = buttoncolors[randomnumber]

gamePattern.push(randomChosenColour)


$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)


// let audio = new Audio("./sounds/"+randomChosenColour+".mp3")

// audio.play()

playSound(randomChosenColour)

// var level = 0


}


function playSound(name){
   
    let audio = new Audio("sounds/"+ name+ ".mp3")

    audio.play()
    
    
}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed")

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100)
}



