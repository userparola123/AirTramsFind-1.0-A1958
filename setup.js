let page1 = document.getElementById("page-1")
let page2 = document.getElementById("page-2")
let page3 = document.getElementById("page-3")
let page4 = document.getElementById("page-4")
let page5 = document.getElementById("page-5")
let page6 = document.getElementById("page-6")
let nextbuttonpage1 = document.getElementById("next-button-page-1")
let nextbuttonpage2 = document.getElementById("next-button-page-2")
let nextbuttonpage3 = document.getElementById("next-button-page-3")
let nextbuttonpage5 = document.getElementById("next-button-page-5")
let nextbuttonpage6 = document.getElementById("next-button-page-6")
let counterStepsText = document.getElementById("counterStepsText")
let nextButtonToStep2 = document.getElementById("next-button-to-step-2")
let step2Page3 = document.getElementById("step-2-page-3")
let step1Page3 = document.getElementById("step-1")
let nextButtonToContinue = document.getElementById("next-button-to-continue")
let myBarp4 = document.getElementById("myBar-p-4")
let localStorageSetup = localStorage.getItem("setup")
let setup = document.getElementById("setup")
let AIRTRAMSFIND = document.getElementById("AIRTRAMSFIND")

if(localStorage.getItem('setup') === null){
      setup.style.display = "block"
      AIRTRAMSFIND.style.display = "none"
} else if(localStorage.getItem('setup') === 'made'){
    setup.style.display = "none"
    AIRTRAMSFIND.style.display = "block"
}


nextbuttonpage1.addEventListener("click", function(){
    page2.style.display = "block"
    page1.style.display = "none"
})

nextbuttonpage2.addEventListener('click', function(){
    page2.style.display = "none"
    page3.style.display = "block"
})

nextButtonToStep2.addEventListener('click', function(){
  step1Page3.style.display = "none"
  step2Page3.style.display = "block"
  counterStepsText.innerHTML = "1/2"
})

nextButtonToContinue.addEventListener('click', function(){
    step2Page3.style.display = "none"
    nextbuttonpage3.style.display = "block"
    counterStepsText.innerHTML = "2/2"
})

nextbuttonpage3.addEventListener('click', function(){
    page3.style.display = "none"
    page4.style.display = "block"
})

myBarp4.addEventListener('animationend', function(){
    page4.style.display = "none"
    page5.style.display = "block"
})

nextbuttonpage5.addEventListener('click', function(){
    page5.style.display = "none"
    page6.style.display = "block"
})

nextbuttonpage6.addEventListener('click', function(){
      localStorage.setItem('setup', 'made')
      setup.style.display = "none"
      AIRTRAMSFIND.style.display = "block"
})



