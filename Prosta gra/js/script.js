
var btnNewGame = document.getElementById('js-startGame');
btnNewGame.addEventListener('click', showForm, false);

// This function is responsible for showing modal window
function showForm() {
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

/////////// DATA VALIDATION  ///////////////

var form = document.getElementById('submit-form');
var btnSubmit = document.getElementById('js-loadGame');
var login="";

//Data validation
form.addEventListener('submit', function (e) {
    
 
    var login = document.getElementById('login').value;
    var expression = /^[a-zA-Z0-9]{6,12}$/;
    if (login.match(expression)) {
        document.getElementById('message').style.display = "none";
        loadPlayground(); //bardziej by pasowało wgrac to asynchronicznie
        
    }
    else {
        e.preventDefault();
        document.getElementById('message').style.display = "block";
    }
//      e.preventDefault();
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('message').style.display = "none";
});


function loadPlayground() {
    document.getElementById('introduction').style.display='none';
    document.getElementById('js-playerPickElement').style.display='block';
    btnNewGame.innerHTML = "Jeszcze raz";
}

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

















