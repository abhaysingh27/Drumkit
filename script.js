var noOfdrumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<noOfdrumButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function handleclick (){
        
           var ButtonInnerHtml = this.innerHTML;
           makesound(ButtonInnerHtml);
           buttonAnimation(ButtonInnerHtml);
        
    });
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);


});
function makesound(key){
    switch (key) {
        case "a":
            var tom1 = new Audio("sounds1/tom-1.mp3");
            tom1.play();
            break;
    case "s":
        var tom2 = new Audio("sounds1/tom-2.mp3");
        tom2.play();
        break;
        case "d":
            var tom3 = new Audio("sounds1/tom-3.mp3");
        tom3.play();
        break;
        case "f":
            var tom4 = new Audio("sounds1/tom-4.mp3");
        tom4.play();
        break;
        case "j":
            var tom5 = new Audio("sounds1/snare.mp3");
        tom5.play();
        break;
        case "k":
            var tom6 = new Audio("sounds1/crash.mp3");
        tom6.play();
        break;
        case "l":
            var tom7 = new Audio("sounds1/kick-bass.mp3");
        tom7.play();
        break;


        default: console.log(Buttoninnerhtml);
    
    }

}

function buttonAnimation(currentkey){
   var activekey = document.querySelector("." + currentkey);
   activekey.classList.add("pressed");

//    here we have added animatin but now we habe to set  time out for/ that animation effect

setTimeout(function(){

    activekey.classList.remove("pressed")
}, 100);


// we use setTimeout keyword and make a function m wo enter karenge jo apply karna hai

}