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

# 📚 과제 - 화면

스크린 샷 첨부

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

## Assignment 1 - `Login`

- 로그인 컴포넌트를 개발합니다. (최소화 - `input` 2개, `button` 1개)
<img width="400" alt="원티드1" src="https://user-images.githubusercontent.com/87474789/177477628-1ce19014-8a19-4670-87f2-d823127521fc.png">

- 약간의 랜더링 최적화를 고려해주세요. (Hint: Ref 사용)

- 로그인 시(ID, PW 입력 후 버튼 클릭)

  - Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지 되어야 합니다.)

  - 메인 페이지로 이동합니다.(로그인이 완료되면)

  - 반응형 CSS 적용은 하지 않으셔도 좋습니다. 해당 페이지는 반응형 CSS를 평가하지 않습니다.



## Assignment2 - `GNB`

- 로그인 후 이동하는 메인페이지의 GNB를 구현해주세요.

<img width="400" alt="원티드2" src="https://user-images.githubusercontent.com/87474789/177477646-42849578-f607-4bf3-870b-d6f942b92dea.png">

<img width="400" alt="원티드3" src="https://user-images.githubusercontent.com/87474789/177477657-99d6f5fb-aa44-457c-91c6-627071050225.png">

 

- 가장 오른쪽 아이콘을 Logout으로 변경해주세요.

  - (가운데 검색바는 `input` 요소로만 만들어주세요. 기능은 X)

  - (아이콘은 자유롭게 사용하셔도 괜찮습니다. 아이콘 라이브러리 설치 O)

```jsx
const GNB = () => {
  return (
    <GNBContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <GNBInputContainer>
        <BiSearch size="27" />
        <GNBInput placeholder="검색" />
      </GNBInputContainer>
      <GNBIconsContainer>
        <Icon>
          <MdHomeFilled />
        </Icon>
        <Icon>
          <FiHeart />
        </Icon>
        <Icon>
          <CgProfile />
        </Icon>
      </GNBIconsContainer>
    </GNBContainer>
  );
};
```

- 구현 시 스크롤에 관계 없이 화면 상단에 고정되는 `sticky` GNB 를 구현해주세요.

- 모바일 사이즈의 경우 가운데 Input 창이 사라져야 하고 양옆으로(space-between) 정렬 되어야 합니다.

```jsx
const GNBContainer = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 0.2rem 0.5rem;
  border-bottom: 0.1px solid var(--color-border);
  background: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 8rem;
`;
```

## Assignment3 - `Validation`



- 이메일과 비밀번호의 유효성을 확인합니다.

  - 이메일 조건 - `@` , `.` 포함

  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상

- 유효성 검사 시 아래 두 가지를 적용해서 구현해주세요.

  - 정규표현식 사용

  - Validation 함수 분리
  
```jsx
export const emailValidate = (value) => {
  return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    value
  );
};

// passwordValidate: 최소 8자, 하나 이상의 대문자, 하나의 숫자 및 하나의 특수 문자
export const passwordValidate = (value) => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    value
  );
};
```

  - 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인



- Validation 상태를 CSS로 표현해주세요.

  - Email Input

    Validation Check를 통해 Email 형식이 아닌 경우 표시를해주세요. (ex. boder가 red색상으로 변경)

  - Password Input

    Validation Check를 통해 Password 형식이 아닌 경우 표시를 해주세요. (ex. boder가 red색상으로 변경.)

  - Login Button

    Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경해주세요. (통과 되지 못한 경우와 구별이 가능해야 합니다.)





## Assignment4 - `Routing`



- 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현해주세요. (Local Storage)

- 로그인이 완료되면 라우터에서 Main Page로 이동되어야 합니다. (history push 사용 X)

- 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.(history push 사용 X)

```jsx
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
```

## Assignment5 - `Feeds`

- 레이아웃을 인스타그램과 동일하게 구현해주시면 됩니다. 

- Feed는 최소 3개이상 랜더링 되도록 구현해주세요.

- Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다.

- Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등)

<img width="500" alt="원티드4" src="https://user-images.githubusercontent.com/87474789/177477664-aecf9651-225b-40b3-b90b-697597ac43e4.png">

- 각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청해야 합니다.

```jsx
export const getFeeds = async () => {
  const result = await axios
    .get('http://localhost:8000/feeds')
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.message);
      return [];
    });
  return result;
};
```

- 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록)

- 게시 후 Input은 초기화 되어야 합니다.

<img width="450" alt="원티드5" src="https://user-images.githubusercontent.com/87474789/177477670-b4ededb2-f18f-48ae-a68b-96539ca6c668.png">

- Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload)

```jsx
<PostImg
   src={postImgUrl}
   onLoad={() => {
      setIsLoaded(true);
   }}
/>
```
 
  - 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)
  
```jsx
@media (max-width: 499px) {
    min-width: 0px;
    width: 95%;
  }
```
