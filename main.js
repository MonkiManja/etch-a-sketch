const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color-picker");
const screenSizer = document.getElementById("screen-sizer");
const colorRandomizer = document.getElementById("randomizer");
let canvasNodeList;
let saveColor;


let color ="#000000";
let randomizer = false;
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



function resetCanvas() {   
    canvasNodeList.forEach((pixel) => pixel.style.backgroundColor = "#ffffff")
}
document.getElementById("reset-canvas").addEventListener("click", resetCanvas) //Canvas resetter
document.getElementById("eraser").addEventListener("click", (e) => {
    if(color != "#ffffff"){
        e.target.style.backgroundColor =  "rgb(145, 194, 197)";
        saveColor = color
        color = "#ffffff"
    } else {
        e.target.style.backgroundColor = "rgb(230,230,230)";
        color = saveColor
    }
}) 

//Eraser button
colorRandomizer.addEventListener("click", () => {
    if(randomizer == true){
        colorRandomizer.style.backgroundColor = "rgb(230,230,230)"
        randomizer = false;
    } else {
        colorRandomizer.style.backgroundColor =  "rgb(145, 194, 197)"
        randomizer = true;
    }
});
document.getElementById("grid").addEventListener("click", (e) => {
    canvasNodeList.forEach((pixel) => {pixel.classList.toggle("grid")});
    if(document.querySelector("#canvas > div").classList.contains("grid")){
        e.target.style.backgroundColor =  "rgb(145, 194, 197)";
    } else {
        e.target.style.backgroundColor = "rgb(230,230,230)";
    }
});


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
        const randomHex = () => {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return '#' + n.slice(0, 6);
          };
          
        if(randomizer == true){ //rainbow color future implementation
            pixel.style.backgroundColor = randomHex();
        } else {
            pixel.style.backgroundColor = color;
        }
    }
    
    let isPainting = false
    canvasNodeList.forEach((pixel) => {
        pixel.addEventListener("mousedown", ()=> {
            isPainting = true;
        })
        pixel.addEventListener("mouseup", ()=> {
            isPainting = false;
        })
        pixel.addEventListener("mousemove", ()=> {
    
            if(isPainting){
                paint(pixel, color);
            }
        })
    });

})