var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        var currentButton = this.innerHTML;
        makesound(currentButton);
        buttonAnimation(currentButton);
        }
    );
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){
    switch (key) {
        case "w":
            var beat = new Audio('sounds/tom-1.mp3');
            beat.play();
            break;
        case "a":
            var beat = new Audio('sounds/tom-2.mp3');
            beat.play();
            break;
        case "s":
            var beat = new Audio('sounds/tom-3.mp3');
            beat.play();
            break;
        case "d":
            var beat = new Audio('sounds/tom-4.mp3');
            beat.play();
            break;
        case "j":
            var beat = new Audio('sounds/kick-bass.mp3');
            beat.play();
            break;   
        case "k":
            var beat = new Audio('sounds/crash.mp3');
            beat.play();
            break;
        case "l":
            var beat = new Audio('sounds/snare.mp3');
            beat.play();
            break;
           
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

