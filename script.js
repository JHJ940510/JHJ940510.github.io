
const chatbotButton = document.getElementById('chatbot-button');
const chatContainer = document.getElementById('chat-container');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');

let greeted = false;

// 팝업이 열릴 때 자동으로 챗봇 열기
window.onload = () => {
  chatContainer.style.display = 'flex';
  chatContainer.style.flexDirection = 'column';
  if (!greeted) {
    addMessage('🤖 무엇을 도와드릴까요?', 'bot');
    greeted = true;
  }
};

chatbotButton.onclick = () => {
  const isVisible = chatContainer.style.display === 'flex';
  chatContainer.style.display = isVisible ? 'none' : 'flex';
  chatContainer.style.flexDirection = 'column';

  if (!isVisible && !greeted) {
    addMessage('🤖 무엇을 도와드릴까요?', 'bot');
    greeted = true;
  }
};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

async function sendMessage() {
  const question = userInput.value.trim();
  if (!question) return;
  addMessage('🙋‍♀️ ' + question, 'user');
  userInput.value = '';

  const response = await fetch(
    'https://script.google.com/a/macros/pchand.or.kr/s/AKfycbyH02yItnz4s7BxIj_uDWvGfiXTTgtekRvRpMMMBxQAhgXoNS7sTGhYIhmn8TWfyVe5Jw/exec',
    {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify({ 질문: question })
    }
  );

  const data = await response.json();
  addMessage('🤖 ' + data.답변, 'bot');
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}
