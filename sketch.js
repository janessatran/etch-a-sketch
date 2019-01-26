var containerDiv = document.getElementsByClassName("grid-container");
var container = document.getElementsByClassName("container");
var clearButton = document.getElementById("clear");
let size = 32;
function createDivs() {
    for(let i = 0; i < size * size ; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.id = i.toString();
        newDiv.style.height = (600 / size) + "px";
        newDiv.style.width = (700 / size) + "px";

        newDiv.addEventListener('click touchstart', function() {
            this.style.background = "grey";
        });

        newDiv.addEventListener('mousemove', function(e) {
            if(e.buttons == 1) {
                this.style.background = "grey";
            }
            if (e.buttons == 2) {
                this.style.background = "#ffdfa0";
            }
        });
        containerDiv[0].appendChild(newDiv);
        // document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
    }
}

function clearGrid() {
    while (containerDiv[0].firstChild) {
        containerDiv[0].removeChild(containerDiv[0].firstChild);
    }
    createDivs();
}

clearButton.addEventListener('click', function() {
    clearGrid();
});



createDivs();