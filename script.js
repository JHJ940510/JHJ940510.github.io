
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

  const response = await fetch(
    'https://script.google.com/u/0/home/projects/17fP1OSDnLwhkw9Rw2qhcdSnrqGNj7e5vTXxs4-F6aaUUUHeuiAjrkUNl/edit',
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
