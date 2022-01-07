function myFunction() {
    var ele = document.body;
    ele.style.backgroundColor = "black";

    var image = document.getElementById("logo")
    image.src = "logo_darkmode.png";
}

function lightmode() {

    var ele = document.body;
    ele.style.backgroundColor = "white";

    var image = document.getElementById("logo")
    image.src = "logo.png";
}