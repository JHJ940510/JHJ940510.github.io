
const chatContainer = document.getElementById('chat-container');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');

function openChat() {
  addMessage('🤖 무엇을 도와드릴까요?', 'bot');
}

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

  try {
    const response = await fetch(
      'https://script.google.com/a/macros/pchand.or.kr/s/AKfycbznhW0ceYgYdOJMogOPH6dSzoB9e6U1nqSCCAYywNTdMcTsGMLLM-717nh7hYYR3fFGkw/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 질문: question })
      }
    );

    const data = await response.json();
    const answer = data.답변 || "답변이 확인되지않습니다. 메인 페이지 우측 상단에 '문의사항'에 입력해주시면 확인 후 안내드리겠습니다.";
    addMessage('🤖 ' + answer, 'bot');
  } catch (error) {
    addMessage('🤖 응답을 받아오지 못했습니다. 로그인 상태를 확인해주세요.', 'bot');
  }
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}
