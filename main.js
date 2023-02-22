const canvas = document.getElementById("canvas");

let grid_num = 16;

for(let i = 0; i < grid_num ** 2; i++){
    createPixel();
}

function createPixel(){
    console.log("passd")
    let newItem = document.createElement("div");
    newItem.className = "testColor";
    canvas.appendChild(newItem);
}


