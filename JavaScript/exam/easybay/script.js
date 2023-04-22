
var newImage = document.getElementById('succulent-img');
function changeSource() {
    newImage.src = "succulents-2.jpg";
}

function revertBack() {
    newImage.src = "succulents-1.jpg";
}



var i = document.querySelector(".last-section");
function hideSection() {
    i.remove();
}