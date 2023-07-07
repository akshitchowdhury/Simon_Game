// alert("WC to the Simon game")

var gamePattern = []



var buttoncolors = ["red", "blue", "green", "yellow"]



function nextSequence(){

var randomnumber = Math.floor(Math.random()*4)




var randomChosenColour = buttoncolors[randomnumber]

gamePattern.push(randomChosenColour)
}

let audio = new Audio("./sounds/"+randomChosenColour+".mp3")



$("#"+randomChosenColour).fadeOut(100).fadeIn(100).play()
