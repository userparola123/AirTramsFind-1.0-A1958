var brunoMessageBox = document.getElementById("brunoMessageBox")
var inputButton = document.getElementById("inputButton")
var brunoMessage0 = document.getElementById("brunoMessage0")
// header search function
var numberDuplicated = 0;
var brunoMessageHeader = document.getElementById("mydivbrunoheader")
var tabsOpen = [];
var tabsOpenLength = tabsOpen.length;
var openTabsDetectVar = {
  intervalStatus: "tab-inchis",
  name: "Tab"
}
var mouseReleased = false;



function search() {

// summary results

var searchSummary = document.getElementById("searchSummary");
var brunoSearchResult = document.getElementById("brunoSearchResult");
var brunoMessage = document.getElementById("brunoMessage" + numberDuplicated);
brunoMessageHeader.style.display = "block"

searchSummary.style.display = "block";

brunoSearchResult.style.display = "block";

brunoMessage.style.display = "block";

  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  

}




function detectTabsOpen(){

  if(numberDuplicated > 5){
  alert("No more!")
  document.getElementById("brunoMessage6").remove()
  numberDuplicated -= 1;
  return;
  }


  // detecteaza daca sunt taburi deschise
  if(openTabsDetectVar.intervalStatus === "tab-inchis"){
    openTabsDetectVar.intervalStatus = "tab-deschis"
    tabsOpen.push(openTabsDetectVar.name + (tabsOpen.length + 1))
    brunoMessageHeader.style.display = "block"
  } else{
    tabsOpen.push(openTabsDetectVar.name + (tabsOpen.length + 1))
    cloneDiv()
    dragElementSearch()
  }

 


}

var original = document.getElementById('brunoMessage' + numberDuplicated);

function cloneDiv(){
 
  var clone = original.cloneNode(true); // "deep" clone
 clone.id = "brunoMessage" + ++numberDuplicated; // there can only be one element with an ID
  clone.onclick = cloneDiv; // event handlers are not cloned
  original.parentNode.appendChild(clone);
}


function closeWindowsSearch(){




  // get how many windows are open

    if(tabsOpen.length === 0){
      openTabsDetectVar.intervalStatus = "tab-inchis"
    } else{
        openTabsDetectVar.intervalStatus = "tab-deschis"
       

    }
   
    if(numberDuplicated === 0){
      brunoMessage0.style.display = "none"
      brunoMessageHeader.style.display = "none"
    } else if(numberDuplicated === 1){
      document.getElementById("brunoMessage1").remove()
      numberDuplicated -= 1;
    } else if(numberDuplicated === 2){
      document.getElementById("brunoMessage2").remove()
      numberDuplicated -= 1;
    } else if(numberDuplicated === 3){
      document.getElementById("brunoMessage3").remove()
      numberDuplicated -= 1;
    } else if(numberDuplicated === 4){
      document.getElementById("brunoMessage4").remove()
      numberDuplicated -= 1;
    } else if(numberDuplicated === 5){
      document.getElementById("brunoMessage5").remove()
      numberDuplicated -= 1;
    }




 

}

function dragElementSearch(){
// DRAG ELEMENTS FUNCTION

 //Make the DIV element draggagle:
 dragElement(document.getElementById("brunoMessage0"));
 dragElement(document.getElementById("brunoMessage1"));
 dragElement(document.getElementById("brunoMessage2"));
 dragElement(document.getElementById("brunoMessage3"));
 dragElement(document.getElementById("brunoMessage4"));
 dragElement(document.getElementById("brunoMessage5"));
 function dragElement(elmnt) {
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
     mouseReleased = true;
     
    
    
   }
 }
 

 if(numberDuplicated > 5){
  alert("No more!")
  document.getElementById("brunoMessage6").remove()
  numberDuplicated -= 1;
  return;
  }

  if(numberDuplicated === 0){
    brunoMessage0.style.display = "none"
    brunoMessageHeader.style.display = "none"
  } else if(numberDuplicated === 1){
    document.getElementById("brunoMessage1").remove()
    numberDuplicated -= 1;
  } else if(numberDuplicated === 2){
    document.getElementById("brunoMessage2").remove()
    numberDuplicated -= 1;
  } else if(numberDuplicated === 3){
    document.getElementById("brunoMessage3").remove()
    numberDuplicated -= 1;
  } else if(numberDuplicated === 4){
    document.getElementById("brunoMessage4").remove()
    numberDuplicated -= 1;
  } else if(numberDuplicated === 5){
    document.getElementById("brunoMessage5").remove()
    numberDuplicated -= 1;
  }


}
