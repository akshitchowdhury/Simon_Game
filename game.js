// alert("WC to the Simon game")
var userClickedPattern = [];


var gamePattern = []



var buttoncolors = ["red", "blue", "green", "yellow"]



$(".btn").click(function handler(){
    
    var val = $(this).attr("id");
    var userChosenColor =  val;

    userClickedPattern.push(userChosenColor)

})


function nextSequence(){

var randomnumber = Math.floor(Math.random()*4)




var randomChosenColour = buttoncolors[randomnumber]

gamePattern.push(randomChosenColour)


$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)


let audio = new Audio("./sounds/"+randomChosenColour+".mp3")

audio.play()






}



