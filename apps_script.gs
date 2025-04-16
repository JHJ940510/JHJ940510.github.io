function doPost(e) {
  var sheet = SpreadsheetApp.openById("스프레드시트ID").getSheetByName("시트이름");
  var data = JSON.parse(e.postData.contents);
  var question = data.question;

  var range = sheet.getRange("A2:B" + sheet.getLastRow()).getValues();
  var answer = "답변이 확인되지않습니다. 메인 페이지 우측 상단에 '문의사항'에 입력해주시면 확인 후 안내드리겠습니다.";

  for (var i = 0; i < range.length; i++) {
    if (question.includes(range[i][0])) {
      answer = range[i][1];
      break;
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ answer: answer })).setMimeType(ContentService.MimeType.JSON);
}
