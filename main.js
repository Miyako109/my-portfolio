const backgroundImg = document.getElementById("marina")
const count = document.getElementById("count")
const countButton = document.getElementById("count-button")

let num=2;
function timer(){
    if(backgroundImg.complete){
        backgroundImg.src="image"+num+".jpg";
        num++ ; if(num > 3)num=1;
    }
    setTimeout('timer()',3000);
}

timer()

let counter = 0

countButton.onclick = function(){
    counter += 1
    count.textContent = counter
}











