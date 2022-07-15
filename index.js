alert('Start Game? If using mobile please play in "Horizontal Mode"');

 

let iscore = 10;

audio = new Audio('audio1.wav');
audiogo = new Audio('over.wav');
audiosc = new Audio('beep.wav');

//setInterval( function bgmusic(){
 // audio.play();
//}, 1000);

document.onkeydown = function (e) {

    // console.log("key pressed");
    

    cat = document.querySelector('#cat');

    cat.classList.add('animateCat');

    setTimeout(function  () {

        cat.classList.remove('animateCat');

 

    }, 1300);

}

document.onclick = function (e) {

    // console.log("mouse clicked");

    cat = document.querySelector('#cat');

    cat.classList.add('animateCat');

    setTimeout(function () {

        cat.classList.remove('animateCat');

 

    }, 1300);

}

 

dino = document.querySelector('#dino');

 

setInterval(() => {

    cat = document.querySelector('#cat');

    gameOver = document.querySelector('.gameOver');

    dino = document.querySelector('#dino');

    cx = parseInt(window.getComputedStyle(cat, null).getPropertyValue('left'));

    cy = parseInt(window.getComputedStyle(cat, null).getPropertyValue('top'));

 

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

 

    offsetX = Math.abs(cx - dx);

    offsetY = Math.abs(cy - dy);

 

    // console.log(offsetX, offsetY);

 

    if (offsetX < 63 && offsetY < 8) {

        gameOver.style.visibility = 'visible';

        dino.classList.remove('animateDino');
        
       audiogo.play();
          audio.pause();

        
        document.onclick = function (r){
          setTimeout(() =>{
            window.location.reload();
          }, 200);
        } 

 

    }

    else if (offsetX < 130 && offsetX > 63) {

 

        updateScore(iscore);
        audio.play();

 

    }

}, 0.0001);

 

function updateScore(iscore) {

    score.innerHTML = "Score: " + iscore;

}

 

let freq = 4000;

 

setInterval(() => {

 

    iscore += 10;
    
   
    

 

    setInterval(() => {

        dino = document.querySelector('#dino');

        d1x = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    }, 1);

 

 

 

    if (d1x < -3 || d1x > 1530) {

        freq = freq - 500;

        dino.style.animationDuration = freq + 'ms';

    }

 

 

    console.log('d1x:' + d1x);

    console.log("freq =" + freq);

    console.log('ani dur' + dino.style.animationDuration);

    // console.log(iscore);

    time = new Date();

    console.log(time.getSeconds());

    //    console.log(offsetX, offsetY);

}, 4000);

 
