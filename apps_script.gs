function doPost(e) {
  var sheet = SpreadsheetApp.openById("1aEi5KOHhd8eGM5ErI8lS3zARp5_MssU8SuJP406Sy0s").getSheetByName("QnA");
  var data = JSON.parse(e.postData.contents);
  var question = data.질문;

  var range = sheet.getRange("A2:B" + sheet.getLastRow()).getValues();
  var answer = "답변이 확인되지않습니다. 메인 페이지 우측 상단에 '문의사항'에 입력해주시면 확인 후 안내드리겠습니다.";

  for (var i = 0; i < range.length; i++) {
    if (question.includes(range[i][0])) {
      answer = range[i][1];
      break;
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ 답변: answer })).setMimeType(ContentService.MimeType.JSON);
}
