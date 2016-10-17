var btnNewGame = document.getElementById('js-startGame');
var playground = document.getElementById('wrapper');
btnNewGame.addEventListener('click', startGame, false);

function startGame() {
    var modalWindow = document.getElementById('modalWindow');
    var span = document.getElementById('close');
    modalWindow.style.display = 'block';
    span.onclick = function () {
        modalWindow.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modalWindow) {
            modalWindow.style.display = 'none';
        }
    }
}
//var loadGame = document.getElementById('js-loadGame');
//
//loadGame.addEventListener('click', function load () {
//    
//    return false;
//});
var btnSubmit = document.getElementById('js-loadGame')
btnSubmit.addEventListener('click', function () {
    var login = document.getElementById('login').value;
    var expression = /^[a-zA-Z0-9]{6,12}$/;
    if (login.match(expression)) {
        document.getElementById('message').style.display = "none";
    }
    else {
        document.getElementById('message').style.display = "block";
    }
});
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('message').style.display = "none";
});