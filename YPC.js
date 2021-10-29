let startbutton = document.getElementById("startbutton")
let firstquestions = document.getElementById("question1")
let heading1 = document.getElementById("h1")
startbutton.addEventListener("click", startgame)
function startgame() {
    startbutton.classList.add("hide")
    heading1.classList.add("hide")
    firstquestions.classList.remove("hide")
}
let questionn1b = document.getElementById("question1b")
button1.addEventListener("click", startgame1)
button2.addEventListener("click", startgame1)
button3.addEventListener("click", startgame1)
button4.addEventListener("click", startgame1)
button5.addEventListener("click", startgame1)
button6.addEventListener("click", startgame1)
const checkjimmy = 0;
const checkgon = 0;
const checkwater = 0;
const checkean = 0;
const checkaaron = 0;
let jimmy = 0;
let gon = 0;
let water = 0;
let ean = 0;
let aaron = 0;

function pointforjimmy() {
    jimmy++
}
function pointforgon() {
    gon++
}
function pointforwater() {
    water++
}

function pointforean() {
    ean++
}

function pointforaaron() {
    aaron++
}
   
        
let secondquestions = document.getElementById("question2")
function startgame1() {
    button1.classList.add("hide")
    button2.classList.add("hide")
    button3.classList.add("hide")
    button4.classList.add("hide")
    button5.classList.add("hide")
    button6.classList.add("hide")
    questionn1b.classList.add("hide")
    secondquestions.classList.remove("hide")
}
button7.addEventListener("click", startgame2)
button8.addEventListener("click", startgame2)
button9.addEventListener("click", startgame2)
button10.addEventListener("click", startgame2)
button11.addEventListener("click", startgame2)
button12.addEventListener("click", startgame2)
let thirdquestions = document.getElementById("question3")
let questionn2b = document.getElementById("question2b")
function startgame2() {
    button7.classList.add("hide")
    button8.classList.add("hide")
    button9.classList.add("hide")
    button10.classList.add("hide")
    button11.classList.add("hide")
    button12.classList.add("hide")
    questionn2b.classList.add("hide")
    thirdquestions.classList.remove("hide")
}
button13.addEventListener("click", startgame3)
button14.addEventListener("click", startgame3)
button15.addEventListener("click", startgame3)
button16.addEventListener("click", startgame3)
button17.addEventListener("click", startgame3)
let questionn3b = document.getElementById("question3b")
let fourthquestions = document.getElementById("question4")
function startgame3() {
    button13.classList.add("hide")
    button14.classList.add("hide")
    button15.classList.add("hide")
    button16.classList.add("hide")
    button17.classList.add("hide")
    questionn3b.classList.add("hide")
    fourthquestions.classList.remove("hide")
}
let divforfinishh = document.getElementById("divforfinish")
button18.addEventListener("click", startgame4)
button19.addEventListener("click", startgame4)
button20.addEventListener("click", startgame4)
button21.addEventListener("click", startgame4)
button22.addEventListener("click", startgame4)
button23.addEventListener("click", startgame4)
let questionn4b = document.getElementById("question4")
let fifthquestions = document.getElementById("question5")

function startgame4() {
    button18.classList.add("hide")
    button19.classList.add("hide")
    button20.classList.add("hide")
    button21.classList.add("hide")
    button22.classList.add("hide")
    button23.classList.add("hide")
    questionn4b.classList.add("hide")
    divforfinishh.classList.remove("hide")
    fifthquestions.classList.remove("hide")
  
     
       
}

function finish() {
     checkagainst()
}
function checkagainst() {
    if (jimmy > gon && jimmy > water && jimmy > ean && jimmy > aaron) {
    alert("you are jimmy")
    }
    else if (gon > jimmy && gon > water && gon > ean && gon> aaron) {
    alert("you are gon")
    }
    else if (water >  ean && water > aaron && water > jimmy && water > gon) {
    alert("you are water")
    }
    else if (aaron > jimmy && aaron > gon && aaron > water && aaron > ean){
     alert("you are aaron")
    }
    else if (ean > jimmy && ean > gon && ean > water && ean > aaron) {
        alert("You are ean")
    }
}


