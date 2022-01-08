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

var listlength = document.querySelectorAll(".listwidth").length;

for (var i = 0; i < listlength; i++) {
    document.querySelectorAll(".listwidth")[i].addEventListener("click", function() {

        var bhtml = this.innerHTML;

        switch (bhtml) {
            case "Food reviews":
                alert("No food reviews available");
                document.getElementById("heading").innerHTML = "Food Reviews";
                break;
            case "Customer care reviews":
                alert("No Customer care  reviews available");
                document.getElementById("heading").innerHTML = "Customer care Reviews";
                break;
            case "Website interface reviews":
                alert("No Website reviews available");
                document.getElementById("heading").innerHTML = "Website Reviews";
                break;
            case "Suggestions":
                alert("Please put down your suggestions");
                var suggest = prompt("Suggestions...");
                document.getElementById("heading").innerHTML = "Suggestions";
                document.getElementById("suggestion").innerHTML = suggest;
                break;
            default:
                alert("Hey there!");
        }
    });
}
