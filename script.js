// Function to change background color
function changeBackgroundColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Set background color
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// Add event listener to the button
document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);