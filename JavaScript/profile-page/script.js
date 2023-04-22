var x = document.querySelector(".name");
function changeProfile() {
    x.innerText = "Jennifer Aniston";
}

var num = 2;
var num2 = 500;
var p = document.querySelector("#run");
var m = document.querySelector("#run")
var y = document.querySelector("#user1");
function removeUser() {
    y.remove();
    num--;
    p.innerText = num;
}

var z = document.querySelector("#user2");
function removeUser2() {
    z.remove();
    num--;
    p.innerText = num2;
}

function increment() {
    num2++;
    m.innerText = num2;

}


