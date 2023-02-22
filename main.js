const canvas = document.getElementById("canvas");

let color ="#0000ff";

let grid_num = 16;

for(let i = 0; i < grid_num ** 2; i++){
    createPixel();
}

function createPixel(){
    let newItem = document.createElement("div");
    newItem.className = "testColor";
    canvas.appendChild(newItem);
}

const canvasNodeList = document.querySelectorAll("#canvas > .testColor")


function paint(pixel, color){
    console.log("painted!")
    pixel.style.backgroundColor = color;
}

console.log(canvasNodeList)
canvasNodeList.forEach((pixel) => {
    pixel.addEventListener("click", paint(pixel, color))
});
// Now the grid is done. Now i have to think how to draw in it