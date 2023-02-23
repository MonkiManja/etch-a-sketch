const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color-picker")
const screenSizer = document.getElementById("screen-sizer")
let canvasNodeList;

let color ="#000000";
let grid_num = 16;


function gridMaker(grid_num) {
    document.querySelector("#screen-sizer-div > h1").textContent = grid_num + " x " + grid_num;
    canvas.style.gridTemplateColumns = ""
    let autoRecorder = "";
    for(let i = 0; i < grid_num ** 2; i++){
        createPixel();
    }
    for(let i= 0; i < grid_num; i++){
        autoRecorder += "auto ";
    }
    canvas.style.gridTemplateColumns = autoRecorder;
    canvasNodeList = document.querySelectorAll("#canvas > .colorPixel")
    
}
gridMaker(grid_num)

colorPicker.addEventListener("change", value => {
    console.log("before: ", color)
    color = value.target.value;
    console.log("after: ", color)
})

// Canvas painter start
function createPixel(){
    let newItem = document.createElement("div");
    newItem.className = "colorPixel";
    canvas.appendChild(newItem);
}



function paint(pixel, color){
    pixel.style.backgroundColor = color;
}



//Canvas painter end

function resetCanvas() {   
    canvasNodeList.forEach((pixel) => pixel.style.backgroundColor = "#ffffff")
}
document.getElementById("reset-canvas").addEventListener("click", resetCanvas) //Canvas resetter
document.getElementById("eraser").addEventListener("click", () => color= "#ffffff") //Eraser button



//Grid button
document.getElementById("grid").addEventListener("click", () => canvasNodeList.forEach((pixel) => pixel.classList.toggle("grid")));


screenSizer.addEventListener("change", (e) => {
    grid_num = e.target.value;
    resetCanvas();
    console.log(grid_num);
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }

    gridMaker(grid_num);

    canvasNodeList.forEach((pixel) => {
        pixel.style.width = `${800 / (grid_num)}px`;
        pixel.style.height = `${800 / (grid_num)}px`;
    })
    //Setting up nodepainter
    canvasNodeList.forEach((pixel) => {
        pixel.addEventListener("click", () => {
            console.log("painted!")
            paint(pixel, color)
        })
    });
   
    

})