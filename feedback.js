// Link API Google Apps Script của bạn
const scriptURL = "https://script.google.com/macros/s/AKfycbw8FIyPVXHR3lLGpPtll3fZDRrEx_bn_TQH9FbiFCcpR2-dpsKWoMMMEdoOmEMVKX-t/exec";

// Tải feedbacks
async function loadFeedbacks() {
  try {
    const res = await fetch(scriptURL);
    const data = await res.json();
    const list = document.getElementById("feedbackList");
    list.innerHTML = "<h3>Lời chúc từ mọi người 💌</h3>";
    data.forEach(entry => {
      const ts = new Date(entry.timestamp);
      list.innerHTML += `<p><strong>${entry.name}</strong> (${entry.choice}) [${ts.toLocaleString()}]:<br>${entry.feedback}</p>`;
    });
  } catch (err) {
    console.error("Lỗi tải feedback:", err);
  }
}

// Gửi feedback
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("feedbackModal");
  const openBtn = document.getElementById("openFeedbackBtn");
  const closeBtn = document.getElementById("closeFeedbackBtn");

  openBtn.onclick = () => {
    modal.style.display = "flex";
    loadFeedbacks();
  };
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

  document.getElementById("submitFeedback").onclick = async () => {
    const name = localStorage.getItem("userName") || prompt("Nhập tên:");
    localStorage.setItem("userName", name);

    const choice = document.getElementById("choiceSelect").value;
    const feedback = document.getElementById("feedbackInput").value.trim();

    if (!feedback) {
      alert("Bạn chưa nhập lời chúc!");
      return;
    }

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name, choice, feedback })
      });
      document.getElementById("feedbackInput").value = "";
      loadFeedbacks();
    } catch (err) {
      console.error("Lỗi gửi feedback:", err);
      alert("Không gửi được, thử lại nhé.");
    }
  };
});