let container = document.querySelector(".mainContainer");
const grid = document.getElementById('sketch-container');



const GRID_SIZE = 16;
createNewGrid(GRID_SIZE);

function createNewGrid(size) {
    let sizeOfGrid = Math.pow(size, 2);
    console.log(sizeOfGrid);
    for (let i = 0; i < sizeOfGrid; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        grid.appendChild(newDiv);
    }

    //formating each pixel in grid
    let newHeight = newWidth = 256 / size;
    console.log(newHeight);
    console.log(newWidth);
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(element => {
        element.style.height = newHeight.toString() + "px";
        element.style.width = newWidth.toString() + "px";
    })
}

/*document.querySelector("#clear-button").addEventListener("click", resetSketch);
trace.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});

function resetSketch() {
    
}
*/