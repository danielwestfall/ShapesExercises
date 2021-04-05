const elementsList = document.querySelectorAll(".exerciseOne");
const elementsArray = [...elementsList];

function switchLayers(){
    elementsArray.forEach(element => {element.style.zIndex = Math.floor(Math.random() * (9 - 1) + 1)})
};

setInterval(switchLayers, 1000);