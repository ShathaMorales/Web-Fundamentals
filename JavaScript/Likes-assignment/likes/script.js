var elements = document.querySelector('.likes-number');
var likes = 0;
elements.innerText = likes;
function addLike() {
    likes++;
    elements.innerText = likes;
}