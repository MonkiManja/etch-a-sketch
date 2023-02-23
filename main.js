const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color-picker")
const screenSizer = document.getElementById("screen-sizer")
let canvasNodeList;

let color ="#000000";
let grid_num = 0;


function gridMaker(grid_num) {
    function createPixel(){
        let newItem = document.createElement("div");
        newItem.className = "colorPixel";
        canvas.appendChild(newItem);
    }
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
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }

    gridMaker(grid_num);

    canvasNodeList.forEach((pixel) => {
        pixel.style.width = `${800 / (grid_num)}px`;
        pixel.style.height = `${800 / (grid_num)}px`;
    })

    function paint(pixel, color){
        pixel.style.backgroundColor = color;
    }
    
    let isPainting = false
    canvasNodeList.forEach((pixel) => {
        
        pixel.addEventListener("mousedown", ()=> {
            console.log("mousedown")
            isPainting = true;
        })
        pixel.addEventListener("mouseup", ()=> {
            console.log("mouseup")
            isPainting = false;
        })
        pixel.addEventListener("mousemove", ()=> {
            console.log("hover")
            if(isPainting){
                console.log("hover")
                paint(pixel, color);
            }
        })
    });

    
   
    

})