## 초기 redux 구성법

https://velog.io/@nibble/React-Redux%EB%A1%9C-Counter-%EB%A7%8C%EB%93%A4%EA%B8%B0-1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 1차 : counter component 그림 > action type 정의 > action init 구성 > 리듀서 작성 > container내 connect 처리 > index.js에서 store 처리

=> action을 store에 구성할때 reducer 까지 명확히 구현할것
=> Container내에 CounterContainer 추가시 처리 방법 확인 필요
=> module내에 store를 index.js에서 combineReducer를 이용해서 합치기
=> index.js에서 Provider, rootStore를 이용해서 store를 결합 하기

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# todo-all-web

todo web

- Web RTC 적용(동영상 스트리밍)
- VR 적용
- 이미지 처리
- 데스크탑, 앱, 크롬 플러그인, 웹, 서버연동으로 개발필요
- 새로운 기술적용

신규서비스 진행

- redux 생성: 액션 타입 정의 > 액션 함수 생성 > 리듀서 생성 > combineReducer > ducks 생성 > store 생성 > store 연결

# electron 설치 가능

git clone https://github.com/electron/electron-quick-start

처리하기 ㅡ

기준잡기

하루기준 코딩하게 진행되어야함

테스트 하기

ㅡ신규 투두 처리하기

새로운 것을 시작하기

자바 스프링 부트

풀스택 개발

스프링 부트로 개발진행

# HTML DOM EVENT

- abort : 오디오나 비디오가 중단될때 쓰임
  <video onabort="myFunction()">
  object.onabort = function(){ myScript }
  object.addEventListener("abort", myScript );

- afterprint: 인쇄가 시작되면 시작되는 함수
  <body onafterprint="myFunction()">

# git push 시 password 묻지 않기

1. Credential 정보 저장

   > git config credential.helper store

2. 캐시 저장

   > git config credential.helper cache
   > cache 옵션 기본 15분
   > timeout 옵션(초 단위)
   > git config credential.helper 'cache --timeout=3600'

   > -> 1시간

3. 모드 프로젝트에 동일 계정 적용

   > git config credential.helper store --global

4. git config credential.helper 제거

   > git config --global --unset credential.helper

5. git config 설정 수정

   > git config --edit

6. 복구 법
   > git config credential.helper wincred
   > git config --global user.email "abc@ccc.com"
   > git config --global user.name "skandla2002"

새로운 기술 적용 및 개발 진행 필요
ㅡㅡㅡㅡ
신규 글 등록

기본 프로세스 진행
(로그인 > 홈화면 > 리스트 화면 > 상세화면)
