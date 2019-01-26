var containerDiv = document.getElementsByClassName("#grid-container")

function createDivs(num) {
    for(i = 0; i < num; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
    }
}

createDivs(16);