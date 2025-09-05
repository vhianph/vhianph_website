function showSecondPage() {
    document.querySelector(".firstPage").style.display = "none";
    document.querySelector(".secondPage").style.display = "block";
}

function showResult(message, choice) {
    // Hiện text
    document.getElementById("showMessage").textContent = message;

    // Lưu vào localStorage
    const userName = localStorage.getItem("userName") || "Guest";
    const userChoice = choice;
    localStorage.setItem("userChoice", JSON.stringify({ name: userName, choice: userChoice }));

    // Hiện gif phù hợp
    let gif = document.getElementById("showGif");
    if (choice === "Bom") {
        gif.src = "image_and_gif/Bom.gif";
    } else if (choice === "Bong") {
        gif.src = "image_and_gif/Bong.gif";
    } else if (choice === "Both") {
        gif.src = "image_and_gif/Both.gif";
    }

    gif.style.display = "block";
}
