// alert("WC to the Simon game")
var userClickedPattern = [];


var gamePattern = []



var buttoncolors = ["red", "blue", "green", "yellow"]



$(".btn").click(function (){
    
    
    var userChosenColor =   $(this).attr("id");

    userClickedPattern.push(userChosenColor)
    

    playSound(userChosenColor)

animatePress(userChosenColor)

})


function nextSequence(){

var randomnumber = Math.floor(Math.random()*4)




var randomChosenColour = buttoncolors[randomnumber]

gamePattern.push(randomChosenColour)


$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)


// let audio = new Audio("./sounds/"+randomChosenColour+".mp3")

// audio.play()

playSound(randomChosenColour)


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

