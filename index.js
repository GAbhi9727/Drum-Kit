var dval;

function music(tune) {
    switch (tune) {
        case "w drum":
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "a drum":
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s drum":
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "d drum":
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j drum":
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "k drum":
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "l drum":
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;


    }
}

document.addEventListener("keypress", function (event) {
    music(event.key); 
    $("h2").text(event.key);
});

$("button").click(function () {

    dval = $(this).attr("class");
    $("h2").text(dval);
    music(dval)

})


