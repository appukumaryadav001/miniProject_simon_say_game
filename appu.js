let gameSeq= [];
let userSeq = [];
let btns =["yellow","red","purple","green"];

let started=false;
let level=0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
            console.log("game started!");
            started=true;


            levelUp();
    }
   
    

});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
  userSeq=[];
  level++;
  h3.innerText=`Level ${level}`;
  //randombtn
  let randIdx = Math.floor(Math.random()*btns.length);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);


  btnFlash(randBtn);
}


function checkAns(idx){
 
  if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
  
      setTimeout(levelUp,1000);
     }
  }else{
    h3.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start.`;
   let body = document.querySelector("body");
   body.style.backgroundColor = "red";
   setTimeout(() => {
    body.style.backgroundColor="white"
   }, 300);
    reset();
   
  }
    
}

function btnPress(){
  
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
  started = false;
  gameSeq =[];
  userSeq=[];
  level =0;

}