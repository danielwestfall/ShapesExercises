let starArray = [];
let starAmount = Math.random() * (300 - 150) + 150;
let winHeight = window.innerHeight;
let winWidth = window.innerWidth;

//Create an array of stars
for (let i = 0; i < starAmount; i++) {
let xAxis = Math.floor(Math.random() * winWidth);
let yAxis = Math.floor(Math.random() * winHeight);
let starSize = Math.floor(Math.random() * (10 - 2) + 2);
let redAmount = Math.floor(Math.random() * (255 - 150) + 150);
let greenAmount = Math.floor(Math.random() * (255 - 150) + 150);
let blueAmount = Math.floor(Math.random() * (255 - 150) + 150);
let starGrp =  Math.floor(Math.random() * (4 - 1) + 1);
let starClass;
let colorValue = redAmount.toString()+ ',' + greenAmount.toString()+ ',' + blueAmount.toString();

switch (starGrp) {
    case 1:
        starClass = 'starOne';
        break;
    case 2:
        starClass = 'starTwo';
        break;
    case 3:
        starClass = 'starThree';
        break;
    case 4:
        starClass = 'starFour';
        break;
}

    starArray.push([xAxis, yAxis, starSize, colorValue, starClass, i]);
}

//Create stars
function makeStars() {
    for (let i = 0; i < starArray.length; i++) {
    let target = document.getElementById('starrySky');
    let newStar = document.createElement('div');
    newStar.setAttribute('class', starArray[i][4]);
    newStar.setAttribute('id', [i]);
    target.appendChild(newStar);
    let thisStar = document.getElementById([i]);
    thisStar.style.left = starArray[i][0] + 'px';
    thisStar.style.top = starArray[i][1] + 'px';
    thisStar.style.width = starArray[i][2] + 'px';
    thisStar.style.height = starArray[i][2] + 'px';
    thisStar.style.color = 'rgb(' + starArray[i][3] + ')';
    thisStar.style.animation = 'starGlow ' + Math.floor(Math.random() * (60 - 10) + 2) + 's';
    thisStar.style.animationIterationCount = 'infinite';    
        };
    };
