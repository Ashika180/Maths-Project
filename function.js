function img(){
    document.body.style.background = "url('pic.jpeg')";
    document.body.style.backgroundSize = "100% 100%";
}
function image(){
    document.body.style.backgroundImage = "url('kool.jpg')";
    document.body.style.backgroundSize = "100% 100%";
}

function AddUser(){
player_1 = document.getElementById("player1").value;
player_2 = document.getElementById("player2").value;

localStorage.setItem("Player_1", player_1);
localStorage.setItem("Player_2", player_2);


window.location = "pic.html";
}

