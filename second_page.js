function showSecondPage() {
    document.querySelector(".firstPage").style.display = "none";
    document.querySelector(".secondPage").style.display = "block";
}

function showResult(message) {
    // Hiện text
    document.getElementById("showMessage").textContent = message;

    // Hiện gif phù hợp
    let gif = document.getElementById("showGif");
    if (message.includes("Quang Bờm")) {
        gif.src = "image_and_gif/Bom.gif";
    } else if (message.includes("Thị Bông")) {
        gif.src = "image_and_gif/Bong.gif";
    } else if (message.includes("Both")) {
        gif.src = "image_and_gif/Both.gif";
    }

    gif.style.display = "block"; // đảm bảo gif hiện lên
}