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
