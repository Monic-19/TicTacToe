let music = new Audio("attributes/music.mp3");
let turn = new Audio("attributes/ting.mp3");
let gameOver = new Audio("attributes/gameover.mp3");
let over = false;
let bari="X";

function changeBari(){
    if(bari==="X"){
        bari="0";
    }
    else{
        bari="X";
    }
}

function jitaKya(){
    let boxTexts= document.getElementsByClassName('boxText');
    let win=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0], 
        [6,7,8,5,25,0], 
        [0,3,6,-5,15,90], 
        [1,4,7,5,15,90], 
        [2,5,8,15,15,90], 
        [0,4,8,5,15,45], 
        [2,4,6,5,15,135]
    ];

    win.forEach( e => {
          if(  (boxTexts[e[0]].innerText ===  boxTexts[e[1]].innerText) && ( boxTexts[e[1]].innerText ===  boxTexts[e[2]].innerText) && ( boxTexts[e[0]].innerText !== "") ){
            document.getElementsByClassName('info')[0].innerText =  boxTexts[e[0]].innerText + " Won";
            over = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.display = "block";

            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
          }
    });
}

// Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener("click", ()=>{
        if(boxText.innerText===""){
            boxText.innerText=bari;
            changeBari();
            turn.play();
            jitaKya();
            if(!over){
                document.getElementsByClassName('info')[0].innerText = "Current Player : "+ bari;
            }
        }
    } );
});


reset.addEventListener("click" , () => {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    } );
    bari="X";
    document.getElementsByClassName('info')[0].innerText = "Current Player : "+ bari;
    over=false;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.display = "none";
    document.querySelector(".line").style.width = "0vw";
    gameOver.play();

} );