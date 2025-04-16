function initChat() {
  console.log("챗봇 초기화 완료");
}

function toggleChat() {
  const popup = document.getElementById("chat-popup");
  popup.classList.toggle("hidden");
}

function handleKey(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chat-input");
    const msg = input.value.trim();
    if (msg) {
      const body = document.getElementById("chat-body");
      const p = document.createElement("p");
      p.textContent = "사용자: " + msg;
      body.appendChild(p);
      input.value = "";
    }
  }
}
