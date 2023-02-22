const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color-picker")


let color ="#000000";
let grid_num = 16;


for(let i = 0; i < grid_num ** 2; i++){
    createPixel();
}

colorPicker.addEventListener("change", value => {
    console.log("before: ",color)
    color = value.target.value;
    console.log("after: ",color)
})

function createPixel(){
    let newItem = document.createElement("div");
    newItem.className = "colorPixel";
    canvas.appendChild(newItem);
}


// Checking all with the new nodes
const canvasNodeList = document.querySelectorAll("#canvas > .colorPixel")

function paint(pixel, color){
    pixel.style.backgroundColor = color;
}

console.log(canvasNodeList)
canvasNodeList.forEach((pixel) => {
    pixel.addEventListener("click", () => {
        console.log("painted!")
        paint(pixel, color)
    })
});


function resetCanvas() {
    canvasNodeList.forEach((pixel) => pixel.style.backgroundColor = "#ffffff")
}
document.getElementById("reset-canvas").addEventListener("click", resetCanvas)
document.getElementById("eraser").addEventListener("click", () => color= "#ffffff")




document.getElementById("grid").addEventListener("click", () => canvasNodeList.forEach((pixel) => pixel.classList.toggle("grid")));