var min = +prompt("enter your min: ")
var sec = +prompt("enter your sec: ")


var timer = setInterval(function () {

    if (sec === -1){
        min--
        sec = 59
    }
    if (min === 0 && sec === 0){
        clearInterval(timer)
    }
    console.log("timer "+ min + " : " +sec)
    sec--
},1000)