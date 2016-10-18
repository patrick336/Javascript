var   introduction = document.getElementById('introduction');
var   newGameElem = document.getElementById('js-newGameElement'),
      pickElem = document.getElementById('js-playerPickElement'),
      resultsElem = document.getElementById('js-resultsTableElement');

var   playerPointsElem = document.getElementById('js-playerPoints'),
      playerNameElem = document.getElementById('js-playerName'),
      computerPointsElem = document.getElementById('js-computerPoints');


var   pickRock = document.getElementById('js-playerPick_rock'),
      pickPaper = document.getElementById('js-playerPick_paper'),
      pickScissors = document.getElementById('js-playerPick_scissors');

var   playerPickElem = document.getElementById('js-playerPick'),
      computerPickElem = document.getElementById('js-computerPick'),
      playerResultElem = document.getElementById('js-playerResult'),
      computerResultElem = document.getElementById('js-computerResult');

var modalWindow = document.getElementById('modalWindow');
var btnNewGame = document.getElementById('js-startGame');
// Wartości początkowe
var gameState = 'notStarted'; 
var player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

setGameElements();

//Kontrola widoku zależnie od etapu gry.
function setGameElements() {
  switch(gameState) {
    case 'started':
        introduction.style.display = 'none';
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        resultGame.style.display = 'none';  
      break;
    case 'ended':
        btnNewGame.innerHTML = 'Jeszcze raz';
        resultGame.style.display = 'block';  
    case 'notStarted':
    default:
//        introduction.style.display = 'block';
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}



// NASŁUCHIWANIE WYBORU GRACZA, FUNKCJA DAJE INFORMACJE CO GRACZ WYBRAŁ
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });



// wygenerowanie wyboru komputera
function getComputerPick () {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks [Math.floor(Math.random()*3)];
}


// 1) Funkcja przyjmuje jeden parametr,tym parametrem jest wybór gracza 
//    poprzez kliknięcie
// 2) Zmienna computerPick trzyma aktualny wybór komputera.
// 3) Pokazanie wyborów na ekran
// 4) Wywołanie funkcji odpowiedzialnej za sprawdzenie rundy
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }
    setGamePoints();
    whoWins();
}
//AKTUALIZACJA WYNIKU NA EKRANIE
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

// Zmienne okna modalnego oraz przycisku 'New Game'.

btnNewGame.addEventListener('click', showForm, false);

// POKAZYWANIE OKNA MODALNEGO I JEGO OBSŁUGA
function showForm() {

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
    window.onkeydown = function (event){
        if (event.keyCode == 27) 
    // press ESC to close window        
            modalWindow.style.display = 'none';
    }
}



/////////// WALIDACJA DANYCH  ///////////////

var form = document.getElementById('submit-form');
var btnSubmit = document.getElementById('js-loadGame');
var message = document.getElementById('message');

form.addEventListener('submit', function (event) {
    
    resetValues();
    
    var login = document.getElementById('login').value;
    var expression = /^[a-zA-Z0-9]{6,12}$/;
    if (login.match(expression)) {
        message.style.display = "none"; //chowamy komunikat jeśli użytkownik wprowadził poprawną wartość
        player.name = login; 
        setGameElements();
        playerNameElem.innerHTML = login;
        setGamePoints();
        modalWindow.style.display = 'none';        
    }
    else {
//        e.preventDefault();
        message.style.display = "block";
    }
   event.preventDefault();
});

//usuwanie komunikatu
document.getElementById('reset').addEventListener('click', function () {
    message.style.display = "none";
});


var resultGame = document.getElementById('resultGame');
function whoWins () {
    
    if(player.score == 10) {
        gameState = 'ended';
        setGameElements();
        resultGame.innerHTML = "Wygrał: " + player.name + ". Gratulacje !";
    }
    if(computer.score == 10) {
        gameState = 'ended';
        setGameElements();
        resultGame.innerHTML = "Wygrał komputer. Gramy rewanż?";
    }
    
      
}


function resetValues () {
    playerPickElem.innerHTML="";
    computerPickElem.innerHTML="";
    playerResultElem.innerHTML="";
    computerResultElem.innerHTML="";    
    player.score = computer.score = 0;
    player.name = "";
    gameState ='started';
}

