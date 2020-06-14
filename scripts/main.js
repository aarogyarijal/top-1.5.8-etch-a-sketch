const container = document.querySelector("#container");
const refreshButton = document.querySelector("#refresh");
const boxes = document.querySelectorAll("#container");

//Making Default Grid Divs
for(let i=0; i<256; i++){
    container.appendChild(document.createElement("div"));
    container.style="grid-template-columns: repeat(16, auto)";
}

//When Refresh button is Clicked
refreshButton.addEventListener("click", refreshButtonClicked)
function refreshButtonClicked(){
    gridNumber = prompt("Grid Length?");
    container.innerHTML = "";
for(let i=0; i<(gridNumber**2); i++){
    let newChild=document.createElement("div");
    container.style=`grid-template-columns: repeat(${gridNumber}, auto)`;
    newChild.style.width=`calc(80vmin/${gridNumber}`;
    newChild.style.height=`calc(80vmin/${gridNumber}`;
    container.appendChild(newChild);

}

}

//Changing color of divs on mouse over
boxes.forEach(div => div.addEventListener("mouseover", changeColor));
function changeColor(e){
    console.log(e);
    if(e.target.id === "container") return;
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    e.target.style=`background-color:rgb(${r},${g},${b})`;
}
