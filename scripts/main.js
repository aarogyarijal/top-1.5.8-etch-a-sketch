const container = document.querySelector("#container");
const boxes = document.querySelectorAll("#container");
const box = document.querySelector("#container").children;
const clearButton = document.querySelector("#clear");
const lengthButton = document.querySelector("#length");
const whiteModeButton = document.querySelector("#white");
const blackModeButton = document.querySelector("#black");
const colorfulModeButton = document.querySelector("#colorful");
const customColorModeButton = document.querySelector("#custom-color");
let mode="white";
let gridNumber=16;

//Making Default Grid Divs
for(let i=0; i<256; i++){
    let newChild=document.createElement("div");
    newChild.setAttribute('class','box');
    newChild.style.backgroundColor="rgba(255, 255, 255, 0.8)";
    container.appendChild(newChild);
    container.style="grid-template-columns: repeat(16, auto)";
}

//Changing color of divs on mouse over
blackModeButton.addEventListener("click", function() {mode="black"});
whiteModeButton.addEventListener("click", function() {mode="white"});
colorfulModeButton.addEventListener("click", function() {mode="colorful"});
customColorModeButton.addEventListener("click", function() 
{
    mode="custom";
    r=prompt("How much red?(0-255)");
    g=prompt("How much green?(0-255)");
    b=prompt("How much blue?(0-255)");
});

boxes.forEach(div => div.addEventListener("mouseover", changeColor));
boxes.forEach(div => div.addEventListener("touchstart", changeColor)); //For mobile support, properly works on touching div
function changeColor(e){
    console.log(mode);
    if(e.target.id === "container") return;
    if (mode==="colorful"){
        r = Math.random()*255;
        g = Math.random()*255;
        b = Math.random()*255;
        e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
    }
    else if (mode==="white" || !mode){
        e.target.style.backgroundColor="white";
    }
    else if (mode==="black"){
        e.target.style.backgroundColor="black";
    }
    else if (mode==="custom"){
        e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
    }
}


//When Length button is Clicked
lengthButton.addEventListener("click", lengthButtonClicked);
function lengthButtonClicked(){
    gridNumber = prompt("Grid Length?");
    container.innerHTML = "";
    for(let i=0; i<(gridNumber**2); i++){
        console.log("called");
        let newChild=document.createElement("div");
        newChild.setAttribute('class','box');
        newChild.style.backgroundColor="rgba(255, 255, 255, 0.8)";
        container.style=`grid-template-columns: repeat(${gridNumber}, auto)`;
        newChild.style.width=`calc(80vmin/${gridNumber}`;
        newChild.style.height=`calc(80vmin/${gridNumber}`;
        container.appendChild(newChild);
    }

}

//When Clear button is Clicked
clearButton.addEventListener("click", clearButtonClicked);
function clearButtonClicked(){
    container.innerHTML = "";
    for(let i=0; i<(gridNumber**2); i++){
        console.log("called");
        let newChild=document.createElement("div");
        newChild.setAttribute('class','box');
        newChild.style.backgroundColor="rgba(255, 255, 255, 0.8)";
        container.style=`grid-template-columns: repeat(${gridNumber}, auto)`;
        newChild.style.width=`calc(80vmin/${gridNumber}`;
        newChild.style.height=`calc(80vmin/${gridNumber}`;
        container.appendChild(newChild);
    }
}
