let score= document.querySelector('#scoreNumber');
let scoreNumber=0;
let scoreDifficulty=0;
let duration = 5000;


function createRoundDiv() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.borderRadius = "50%";
    div.style.position = "fixed";
    div.style.top = getRandomVerticalPosition();
    div.style.right = "0";
    div.style.textAlign = "center";
    div.style.fontSize = "2em";
    touch=["A","Z","E","R"];
    randomTouch= touch[Math.floor(Math.random()*touch.length)]
    div.innerText = randomTouch;
    if(div.innerText === "A"){
      div.style.backgroundColor = "red";
    }else if(div.innerText === "Z"){
      div.style.backgroundColor = "blue";
    }else if(div.innerText === "E"){
      div.style.backgroundColor = "orange";
    }else if(div.innerText === "R"){
      div.style.backgroundColor = "yellow";
    }
    document.body.appendChild(div);
  
    let screenWidth = window.innerWidth;
    let randomDelay = Math.random() * 30 + 1000;

    let distance = screenWidth + 50;

    if(scoreDifficulty+10===scoreNumber && duration>=500){
      duration-=500;
      scoreDifficulty+=10;
    }

    setTimeout(function() {
      div.style.transition = "transform " + duration + "ms linear";
      console.log(duration)
      div.style.transform = "translateX(-" + distance + "px)";
    }, randomDelay);
  
    div.addEventListener("transitionend", function() {
      if (document.body.removeChild(div) && div.style.backgroundColor!=="green"){
        document.location.href="./pages/gameover.html";
      }
      document.body.removeChild(div);
    });
  
    document.addEventListener("keydown", function(event) {
      if (event.key === div.innerText.toLowerCase()) {
        let divLeft = div.getBoundingClientRect().left;
        let divWidth = div.offsetWidth;
        let leftThreshold = screenWidth * 0.14;
        let rightThreshold = screenWidth * 0.16;
  
        if (divLeft + divWidth >= leftThreshold && divLeft <= rightThreshold) {
          div.style.backgroundColor = "green";
          if(div.style.backgroundColor = "green"){
            scoreNumber+=1;
            score.innerHTML=scoreNumber;
          }
        }
      }
    });
    

    let existingDivs = Array.from(document.querySelectorAll("div"));
    existingDivs.forEach(function(existingDiv) {
      if (existingDiv !== div) {
        let existingDivRect = existingDiv.getBoundingClientRect();
        let newDivRect = div.getBoundingClientRect();
  
        if (doRectsOverlap(existingDivRect, newDivRect)) {
          div.style.right = (parseFloat(existingDiv.style.right) + 60) + "px";
        }
      }
    });
  }
  
  function doRectsOverlap(rect1, rect2) {
    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }
  
  function getRandomVerticalPosition() {
    let verticalPos=["33","43","53","63"];
    return  verticalPos[Math.floor(Math.random()*verticalPos.length)] + "%";
  }
  
  function generateRoundDivRandomly() {
    setInterval(function() {
      createRoundDiv();
    }, Math.random() * 40 + 800);
  }
  
  generateRoundDivRandomly();
  

// linkedin ::::
//   const buttons = document.querySelectorAll('.discover-entity-type-card__bottom-container .artdeco-button');

// buttons.forEach((button) => {
//   setTimeout(() => {
//     button.click();
//   },2000);
// });