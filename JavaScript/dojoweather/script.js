var i = document.querySelector(".last-section");
function hideSection() {
    i.remove();
}


var isCelcius = true;
var isFahrenheit = false;
var element1 = document.querySelectorAll(".degree");
function convert(element) {
    for (var i = 0; i < element1.length; i++) {
        if (element.value == "f") {
            var value1 = element1[i].innerText;
            element1[i].innerText = Math.round((value1 * 9) / 5 + 32);
        } else {
            var value2 = element1[i].innerText;
            element1[i].innerText = Math.round(((value2 - 32) * 5) / 9);
        }
        console.log(element);
    }
}