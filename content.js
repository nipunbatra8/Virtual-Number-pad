// Create a DIV element with the ID "mydiv"
var myDiv = document.createElement("div");
myDiv.id = "mydiv";
myDiv.style.zIndex = "100000000";
myDiv.style.top = "50px";
myDiv.style.right = "0px";

// Create a header DIV element with the ID "mydivheader"
var myDivHeader = document.createElement("div");
myDivHeader.id = "mydivheader";
myDivHeader.innerHTML = "Click here to move";

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.textAlign = "center";
container.style.zIndex = "10";

for (let i = 1; i < 10; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "#90EE90";
    div.id = "div" + i;
    div.innerHTML = i;
    div.style.textAlign = "center";
    div.style.lineHeight = "82px";
    div.style.fontWeight = "bold";
    div.style.border = "2px solid #000";
    div.style.color = "#000000";
    div.style.zIndex = "10";
    div.style.width = "31%";
    div.style.height = "82px";
    container.appendChild(div);
}

// Append the header DIV and P elements to the main DIV
myDiv.appendChild(myDivHeader);
// myDiv.appendChild(btnGroupVertical);
myDiv.appendChild(container);

myDiv.style.position = "absolute";
myDiv.style.zIndex = "9";
myDiv.style.backgroundColor = "#f1f1f1";
myDiv.style.border = "1px solid #d3d3d3";
myDiv.style.textAlign = "center";
myDiv.style.height = "30vh";
myDiv.style.width = "30vh";

myDivHeader.style.padding = "10px";
myDivHeader.style.cursor = "move";
myDivHeader.style.zIndex = "10";
myDivHeader.style.backgroundColor = "#90EE90";
myDivHeader.style.color = "#000";
myDivHeader.style.border = "2px solid #000";
myDivHeader.style.fontWeight = "bold";
myDivHeader.style.textDecoration = "underline";

myDivHeader.addEventListener("click", function () {
    var activeElement = document.activeElement;
    // activeElement.value += "1";
    console.log(activeElement);
});

// Append the main DIV to the body
document.body.appendChild(myDiv);

for (let i = 1; i < 10; i++) {
    let str = "div" + i;
    console.log(document.getElementById(str));
    document.getElementById(str).addEventListener("click", function () {
        var activeElement = document.activeElement;
        activeElement.value += i;
        // if (activeElement.tagName === "INPUT") {
        //     activeElement.value += i;
        // }
        // else {
        //     activeElement.textContent += i;
        // }
    });
}

dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("div1"));
dragElement(document.getElementById("div2"));
dragElement(document.getElementById("div3"));
dragElement(document.getElementById("div4"));
dragElement(document.getElementById("div5"));
dragElement(document.getElementById("div6"));
dragElement(document.getElementById("div7"));
dragElement(document.getElementById("div8"));
dragElement(document.getElementById("div9"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}