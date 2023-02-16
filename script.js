'use strict';

let highscore=0;

function funcreset()
{
    document.querySelector(".score").textContent=20;
    document.querySelector("body").style.backgroundColor=green;
}

let score=20;
let random = Math.floor(Math.random()*20+1);

document.querySelector(".score").textContent=score;
//document.querySelector(".number").textContent=random;
document.querySelector(".highscore").textContent=highscore;


document.querySelector(".check").addEventListener('click',
function(){
    let value=document.querySelector(".guess").value;
    score--;
    document.querySelector(".score").textContent=score;

    if(value==random){
        document.querySelector(".message").textContent="🎊🎊 YaY! Correct Number!!";
        document.querySelector("body").style.backgroundColor='green';
        highscore=Math.max(Number(highscore),Number(score));
        
        //console.log(highscore);
        document.querySelector(".highscore").textContent=highscore;
        document.querySelector(".number").textContent=random;
    }
    else if(value<random)
    {
        document.querySelector(".message").textContent="🤮 Too small ...😞";
    }
    else if(value>random)
    {
        document.querySelector(".message").textContent="🤮 Too large ...😞";
    }
})

document.querySelector(".again").addEventListener('click',
function(){
    score=20;
    random = Math.floor(Math.random()*20+1);

    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent='?';
    document.querySelector("body").style.backgroundColor='#222';
    
    document.querySelector(".message").textContent="start guessing again...";
})
