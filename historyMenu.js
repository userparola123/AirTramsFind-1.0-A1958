var draggableContainer = document.getElementById("empty")
var appsInHistory = []
var ul = document.getElementById("ul")
var calculatorIcon = document.getElementById("calculatorIcon")
var element2 = document.getElementById("element2")
var element3 = document.getElementById("element3")
var element4 = document.getElementById("element4")
var element5 = document.getElementById("element5")
var button = document.getElementsByTagName("button")
var sidebar = document.getElementById("sidebar")
var sidebarOpen = document.getElementById("sidebarOpen")
var historyNmbElmt = 0;



sidebarOpen.addEventListener("click", function(){
draggableContainer.style.display = "block"
sidebar.style.display = "block"
sidebar.style.width = "350px"

var backgroundContainer = document.createElement("div")

// CLOSE BUTTON SIDEBAR STYLES + APPENDING + VARIABLE

var closeButtonBgContainer = document.createElement("img")
closeButtonBgContainer.src = "SVG/cancel.svg"
closeButtonBgContainer.style.width = "25px"
closeButtonBgContainer.style.position = "absolute"
closeButtonBgContainer.style.right = "15px"
closeButtonBgContainer.style.zIndex = "1000"
closeButtonBgContainer.style.top = "10px"
closeButtonBgContainer.style.cursor = "pointer"

closeButtonBgContainer.addEventListener("click", function(){
  closeButtonBgContainer.style.display = "none"
  backgroundContainer.style.display = "none"
  draggableContainer.style.display = "none"
  sidebar.style.display = "none"
})

backgroundContainer.append(closeButtonBgContainer)
backgroundContainer.classList.add("testDIV")
document.body.append(backgroundContainer)

// other styles for opening

backgroundContainer.style.background = "rgba(0,0,0,0.5)"
backgroundContainer.style.width = "100%"
backgroundContainer.style.height = "100vh"
backgroundContainer.style.zIndex = "998"
backgroundContainer.style.position = "absolute"
closeButtonBgContainer.style.display = "block"
sidebar.style.display = "block"
draggableContainer.style.display = "block"
backgroundContainer.style.display = "block"
})



calculatorIcon.addEventListener("click", function(){
    // replace the "not_in_history_1" function with "in_history_1"
    if(calculatorIcon.classList.contains("not_in_history-1")){
    historyNmbElmt =  1 + historyNmbElmt
    calculatorIcon.classList.replace("not_in_history-1", "in_history-1")

    //check with if statement to stop updating historyNmbElmt

    if(calculatorIcon.classList.contains("in_history-1")){
    calculatorIcon.onclick = historyNmbElmt = historyNmbElmt
    var momentOfClick = new Date()
    var time = "Deschis la " + momentOfClick.getHours() + " și " + momentOfClick.getMinutes() + " de minute";
    var historyContainer1 = document.createElement("li")
    var historyContainerClass1 = historyContainer1.classList.add("box1")
    var calculatorSVG = document.createElement("div")
    var timeParagraph = document.createElement("p")
    var titleParagraph = document.createElement("h1")
    var titleParagraphText = document.createTextNode("Calculator")
    // title paragraph appending and adding class
    titleParagraph.append(titleParagraphText)
    titleParagraph.classList.add("calculatorTitle")
    //history container appending elements
    historyContainer1.append(titleParagraph)
    historyContainer1.append(timeParagraph)
    historyContainer1.append(calculatorSVG)
    historyContainer1.setAttribute("draggable", "true")
    // appending historyContainer to ul
    ul.appendChild(historyContainer1)
    appsInHistory.push("calculator")
    // time paragraph appending and adding class
    timeParagraph.append(time)
    timeParagraph.classList.add("timeClass")
    // calculator INNER HTML
    calculatorSVG.innerHTML = '<svg id="Capa_1" enable-background="new 0 0 512 512" height="64" viewBox="0 0 512 512" width="64" xmlns="http://www.w3.org/2000/svg"><g><path d="m441 0h-396c-24.813 0-45 20.187-45 45v396c0 24.813 20.187 45 45 45h296c3.979 0 7.794-1.581 10.606-4.394l130-130c2.814-2.813 4.394-6.628 4.394-10.606v-296c0-24.813-20.187-45-45-45z" fill="#696969"/><path d="m243 0h-198c-24.813 0-45 20.187-45 45v198h243z" fill="#696969"/><path d="m486 243v-198c0-24.813-20.187-45-45-45h-198v243z" fill="#555"/><path d="m243 243v243h98c3.979 0 7.794-1.581 10.606-4.394l130-130c2.814-2.813 4.394-6.628 4.394-10.606v-98zm228 98h.01z" fill="#414141"/><path d="m0 243v198c0 24.813 20.187 45 45 45h198v-243z" fill="#555"/><path d="m156.5 106.5h-20v-20c0-8.284-6.716-15-15-15s-15 6.716-15 15v20h-20c-8.284 0-15 6.716-15 15s6.716 15 15 15h20v20c0 8.284 6.716 15 15 15s15-6.716 15-15v-20h20c8.284 0 15-6.716 15-15s-6.716-15-15-15z" fill="#dcf5fa"/><path d="m399.5 136.5h-70c-8.284 0-15-6.716-15-15s6.716-15 15-15h70c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#bedce6"/><path d="m142.713 364.5 14.394-14.394c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-14.394 14.394-14.394-14.394c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l14.394 14.394-14.394 14.394c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l14.394-14.394 14.394 14.394c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z" fill="#dcf5fa"/><path d="m357 512c-85.468 0-155-69.533-155-155s69.532-155 155-155 155 69.533 155 155-69.532 155-155 155z" fill="#5fc314"/><g fill="#bedce6"><path d="m392 402h-70c-8.284 0-15-6.716-15-15s6.716-15 15-15h70c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m392 342h-70c-8.284 0-15-6.716-15-15s6.716-15 15-15h70c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/></g></g></svg>'
    calculatorSVG.classList.add("calculatorSVG")
}
    
}



const fill = document.querySelector('.box1');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  
  alert("alright!!!!")


}



});

