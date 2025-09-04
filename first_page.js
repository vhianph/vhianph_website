function submitName() {
    var name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Please enter your name first!");
        return;
    }

    // Lưu tên vào localStorage
    localStorage.setItem("userName", name);

    // Chuyển sang firstPage
    showFirstPage(name);
}

function showFirstPage(name) {
    document.querySelector(".introPage").style.display = "none";
    document.querySelector(".firstPage").style.display = "flex";
    document.getElementById("userName").textContent = name;
}

function logout() {
    // Xóa dữ liệu
    localStorage.removeItem("userName");

    // Ẩn firstPage, hiện lại introPage
    document.querySelector(".firstPage").style.display = "none";
    document.querySelector(".introPage").style.display = "block";
}

// Khi load lại trang, kiểm tra localStorage
window.onload = function() {
    var savedName = localStorage.getItem("userName");
    if (savedName) {
        showFirstPage(savedName);
    }
};