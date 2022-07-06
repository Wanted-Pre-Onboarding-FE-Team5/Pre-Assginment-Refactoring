# 🖐🏻 5팀 가보작오해보작오팀

**Week 1-1. 선발 과제 리팩토링 (2022.07.04 ~ 06)**

&nbsp;

# ✅ 리팩토링 전 논의 한 사항

저희 팀은 ‘어떤 기준을 가지고 리팩토링 할 것인가'를 염두에 두고 시작했습니다.
지금은 작은 프로젝트이지만 후에 서비스를 확장하게 된다면 어떤 기능이든 추가하기 용이하도록 방향성을 설정했습니다.
또한 기존의 사전 과제 평가 항목이었던 코드의 일관성, 가독성, 함수 분리 등도 고려하여 코드를 작성하였습니다.

> 논의 결과 크게 아래와 같은 부분을 수정했습니다.

- 디렉토리 구성

  - components
    - 두번 이상 반복된다면 컴포넌트화 하여 재사용성을 높였습니다.
    - common
      - Logo.jsx
    - login
      - LoginPage에 사용될 컴포넌트들을 명시적으로 분리했고 Login.jsx에 기능을 구현했습니다.
      - Button.jsx
      - Login.jsx
      - Input.jsx
    - main
      - MainPage에 사용될 컴포넌트들을 명시적으로 분리했고 Main.jsx에 기능을 구현했습니다.
      - CommentForm.jsx
      - Feed.jsx
      - FeedList.jsx
      - GNB.jsx
      - Main.jsx
  - pages
    - App.js에 라우팅할 페이지로 구성했습니다.
    - LoginPage.jsx
    - MainPage.jsx
  - utils
    - custom hook과 각종 함수들을 분리했습니다.

- globalStyles 설정

  - 전역으로 사용할 속성을 설정했습니다.
  - 반복되는 속성 (ex. 색상) 을 변수로 지정하여 효율을 높였습니다.

- json server 사용

  - 새로 업데이트 된 데이터(ex. 댓글)를 렌더링 후에도 보존할 수 있도록 json server를 사용하여 데이터를 받아왔습니다.

- custom hooks 사용

  - useInput 이라는 custom hook을 만들어 Input을 관리하는 기능을 구현했습니다.

- styled-components 사용
  - 컴포넌트 재사용성을 고려하여 일반 css가 아닌 styled-components를 사용했습니다.

![](../header.png)

&nbsp;

# 💻 개발 환경 설정

```sh
npm install
npm start
```

&nbsp;

# 🔗 팀 문서

가보작오해보작오팀
https://www.notion.so/5-5-ba59637024ee4d16bcddea9d0f6777f6

&nbsp;

## 프로젝트 트리구조

```bash
📦wanted-pre-onboarding-fe
 ┣ 📂public
 ┃ ┣ 📂img
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┣ 📂server
 ┃ ┣ 📜data.json
 ┃ ┗ 📜server.js
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜Logo.jsx
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┃ ┗ 📜Login.jsx
 ┃ ┃ ┗ 📂main
 ┃ ┃ ┃ ┣ 📜CommentForm.jsx
 ┃ ┃ ┃ ┣ 📜Feed.jsx
 ┃ ┃ ┃ ┣ 📜FeedList.jsx
 ┃ ┃ ┃ ┣ 📜GNB.jsx
 ┃ ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜LoginPage.jsx
 ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜globalStyles.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useInput.js
 ┃ ┃ ┣ 📜getFeeds.js
 ┃ ┃ ┣ 📜uploadComment.js
 ┃ ┃ ┗ 📜validator.js
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜index.js
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```
