
let setupLocalStorage = localStorage.getItem("setup")

function startMenuNotFocus(){
  var startMenu = document.getElementById("startMenu");
  startMenu.style.display = "none";
  startMenu.style.opacity = "0";
  startMenu.style.pointerEvents = "none";
}


// Maps Animation SCRIPT


function showMaps() {
  setTimeout(function(){ 
      document.getElementById("map").style.display = "block";
      document.getElementById("loaderMaps").style.display = "none";
  }, 3000);
}


        //Make the DIV element draggagle:
        dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv1"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));
dragElement(document.getElementById("mydiv6"));
function dragElement(elmnt){
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






var closeIcon = document.getElementById("closeIcon");

var numberGuessGame = document.getElementById("containerGuessGame")

var mazeGame = document.getElementById("mazeGame");

var snakeGame = document.getElementById("snakeGame");

var airBombGame = document.getElementById("airBombGame");

var calculator = document.getElementById("calculatorWindow");

var maps = document.getElementById("mapsWindow");

var fullWindowIcon = document.getElementById("fullWindowButton");


var smallWindowIcon = document.getElementById("smallWindowButton");

var movingContainer = document.getElementById("wrapperMovingContainer");

function openWindowMazeGame(){
  mazeGame.style.display = "block";
  mazeGame.style.transition = "1s";
}

function closeWindowMazeGame(){
  mazeGame.style.display = "none";
  mazeGame.style.transition = "1s";
}

function openWindowMaps(){
  maps.style.display = "block";
  maps.style.transition = "1s";
}

function closeWindowMaps(){
  maps.style.display = "none";
  maps.style.transition = "1s";
}

function openWindowGuessGame(){
  numberGuessGame.style.display = "block";
  numberGuessGame.style.transition = "1s";
}

function closeWindowGuessGame(){
  numberGuessGame.style.display = "none";
  numberGuessGame.style.transition = "1s";
}




function openWindowSnakeGame(){
  snakeGame.style.display = "block";
  snakeGame.style.transition = "1s";
}

function closeWindowSnakeGame(){
  snakeGame.style.display = "none";
  snakeGame.style.transition = "1s";
}

function openWindowAirBombGame(){
  airBombGame.style.display = "block";
  airBombGame.style.transition = "1s";
}

function closeWindowAirBombGame(){
  airBombGame.style.display = "none";
  airBombGame.style.transition = "1s";
}

function openWindowCalculator(){
  calculator.style.display = "block";
  calculator.style.transition = "1s";
}

function closeWindowCalculator(){
  calculator.style.display = "none";
  calculator.style.transition = "1s";
}

// JQUERY GHOST GAME

$(document).ready(function(){
  $(".btnGhostStart").click(function(){
    $(".title-screen").css("display", "none");
  });
});

// START MENU EFFECTS - jQuery

$(document).ready(function(){
  $(".startMenuButton").click(function(){
    $(".startMenu").show();
  });
});



$(document).ready(function(){
  $(".closeButton").click(function(){
    $(".startMenu").hide();
  });
});

// HOVER OVER CONTENT START MENU - jQuery

$(document).ready(function(){
  $(".computer").hover(function(){
    $(".imageHoverIcons").css("background", "url(computer-icon.png)");
    }, function(){
    $(".imageHoverIcons").css("background", "url(controlPanel-icon.png)");
  });
});

$(document).ready(function(){
  $(".mazeGame").hover(function(){
    $(".imageHoverIcons").css("background", "url(games-icon.png)");
    }, function(){
    $(".imageHoverIcons").css("background", "url(controlPanel-icon.png)");
  });
});

   //  $(document).ready(function(){
 // $(".redColorSettings").click(function(){
   // $(".sidebar").css("background", "#ff5050");
    // $(".personalizeOptions").css("background", "#ff5050");
   // $(".personalizeOptions .heading").css("background", "#ff5050");
   // $(".personalizeOptions .text").css("background", "#ff5050");
   // $(".personalizeOptions .images").css("background", "#ff5050");
   
    //});
//});



// modals JavaScript


function initializeModal(modalID, buttonID) {
  // Get the modal element
  var modal = document.getElementById(modalID);

  // Get the button that opens the modal
  var btn = document.getElementById(buttonID);

  // Get the <span> element that closes the modal
  var span = modal.querySelector('.close');

  // When the user clicks on the button, open the modal
  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  initializeModal('myModal', 'myBtn');
 
});



function openSettings(){
  var settingsModal = document.getElementById("settingsModal")
  settingsModal.style.pointerEvents = "all"
  settingsModal.style.opacity = "1"
}

//use window.scrollY
var scrollposBrunoMessage = document.getElementById("brunoMessage");
var paragraphBruno = document.getElementById('h1-bruno');


$(scrollposBrunoMessage).on('scroll', function() {
  if ($(this).scrollTop() >= $('#myUL').position().top) {
    paragraphBruno.classList.add("active")
  }
  else{
    paragraphBruno.classList.remove("active")
  }
})



