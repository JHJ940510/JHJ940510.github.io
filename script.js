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

      fetch("https://script.google.com/macros/s/YOUR_WEB_APP_URL/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: msg })
      })
      .then(response => response.json())
      .then(data => {
        const botReply = document.createElement("p");
        botReply.textContent = "챗봇: " + data.answer;
        body.appendChild(botReply);
      })
      .catch(error => {
        console.error("에러:", error);
        const botReply = document.createElement("p");
        botReply.textContent = "챗봇: 오류가 발생했어요.";
        body.appendChild(botReply);
      });

      input.value = "";
    }
  }
}
