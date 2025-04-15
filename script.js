
const chatContainer = document.getElementById('chat-container');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');

기능. 오픈챗() {
 addMessage('🤖 무엇을 도와드릴까요?', 'bot');
}

userInput.addEventListener("키다운", (e) => {
 만약 (예: 키 === "입력") {
 메시지 보내기();
  }
});

비동기 기능. 메시지 보내기() {
 const 질문 = 사용자input.value.trim();
 만약 (!질문)이 돌아온다면;
 addMessage('🙋♀️' + 질문, '사용자');
 userInput.value = '';

  해라 {
 const response = 대기 가져오기(
 'https://script.google.com/macros/s/AKfycbznhW0ceYgYdOJMogOPH6dSzoB9e6U1nqSCCAYywNTdMcTsGMLLM-717nh7hYYR3fFGkw/exec'
      {
 방법: 'POST',
 헤더: {
 '콘텐츠 유형': '애플리케이션/json'
 }
 본문: JSON.stringify({ 질문: 질문 })
      }
 );

 const 데이터 = 응답 대기.json ();
 const answer = data.답변 || "답변이 확인되지않습니다. 메인 페이지 우측 상단에 '문의사항'에 입력해주시면 확인 후 안내드리겠습니다.";
 addMessage('🤖' + 응답, '봇');
  } 또 만나 (오류) {
 addMessage('🤖 응답을 받아오지 못했습니다. 로그인 상태를 확인해주세요.', 'bot');
  }
}

함수 addMessage(텍스트, 발신자) {
 const msg = document.createElement('div');
 msg.textContent = 텍스트;
 chatBody.appendChild(msg);
 chatBody.scrollTop = chatBody.scrollHight;
}
