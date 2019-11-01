# lang-ko-visualization
: 한글 문장에 대한 감정분석과 시각화

### [Demo](https://gcp-nlp.herokuapp.com/)

--- 

### Server (Node.js, Express)

#### `middleware/lang.js`
- [GCP - Cloud Natural Language API](https://cloud.google.com/natural-language/docs/quickstart-client-libraries?hl=ko)를 참고하여 작성
- API 발급 시 받을 수 있는 key 파일 이름을 `GCP-key.json` 으로 수정하여 root directory에 존재해야함

#### GET
- /gcp-lang?text=안녕하세요

---

### Client (VanillaJS)
- `index.html` : layout
- `js/main.js` : javascript (API 요청 및 listener)
- `css/style.css` : 스타일링
- `css/normalize.min.css` : css 초기화

---
