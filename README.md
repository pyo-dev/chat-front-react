# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 설치
npm create vite@latest

## Dependencies: 프로덕션 코드에서 사용되는 패키지들입니다.
### 기본
- react '19.0.0'
	React 라이브러리 자체로, React 컴포넌트와 앱 구조를 구성하는 데 사용됩니다. React의 최신 기능들을 사용할 수 있습니다.
- react-dom '19.0.0'
	React가 DOM과 상호작용할 수 있도록 돕는 라이브러리로, React 앱을 실제 웹 페이지에 렌더링합니다.
### 추가 설치
- axios '1.7.9'
	HTTP 요청을 보내는 라이브러리로, 서버와 데이터를 주고받을 때 사용합니다. REST API 호출 등에서 주로 사용됩니다.
- react-router-dom '7.1.5'
	React 애플리케이션에서 라우팅을 관리하는 라이브러리로, URL에 따라 다양한 페이지를 렌더링할 수 있게 합니다. SPA(Single Page Application)에서 페이지 전환을 관리하는 데 유용합니다.
- recoil '0.7.7'
	상태 관리 라이브러리로, React의 상태 관리 시스템을 보다 간편하고 효율적으로 만들어 줍니다. Recoil은 글로벌 상태 관리와 상태 공유를 간편하게 할 수 있게 해줍니다.
- recoil-persist '5.1.0'
	Recoil 상태를 로컬 스토리지에 저장하여 페이지 새로고침 시 상태가 유지되도록 돕는 라이브러리입니다.
- sass '1.85.0'
	SASS(Syntactically Awesome Stylesheets)는 CSS의 확장된 문법을 제공하는 스타일시트 언어로, 이 패키지는 SASS를 사용하기 위한 컴파일러입니다.

## DevDependencies: 개발 환경에서만 사용되는 패키지들입니다.
### 기본

- @eslint/js: `^9.17.0`	
	코드 품질을 유지하고 오류를 방지하기 위한 정적 코드 분석 도구.

- @eslint/js '9.19.0'	
	JavaScript 코드의 품질을 검사하고, 스타일을 통일하는 ESLint의 공식 패키지입니다.
- @types/react `19.0.8`
	TypeScript에서 React의 타입 정의를 제공하는 패키지입니다.
- @types/react-dom `19.0.3`	
	TypeScript에서 ReactDOM을 사용할 때 필요한 타입 정의 파일입니다.
- @vitejs/plugin-react '4.3.4'
	Vite에서 React를 사용하기 위한 플러그인입니다. React 애플리케이션을 빠르게 빌드할 수 있게 돕습니다
- eslint '9.19.0'
	코드 품질을 검사하고, 스타일을 통일하는 도구입니다. 코드에서 문제를 찾아내고 수정할 수 있도록 돕습니다.
- eslint-plugin-react '7.37.4'
	React 코드에 특화된 ESLint 플러그인으로, React 관련 코드 스타일 규칙을 추가하여 더 좋은 품질의 React 코드를 작성할 수 있게 돕습니다.
- eslint-plugin-react '7.37.4'
	React 코드에 특화된 ESLint 플러그인으로, React 관련 코드 스타일 규칙을 추가하여 더 좋은 품질의 React 코드를 작성할 수 있게 돕습니다.
- eslint-plugin-react-hooks '5.0.0'
	React Hooks에 관련된 규칙을 추가하여, 함수형 컴포넌트에서 Hook을 올바르게 사용하도록 돕습니다.
- eslint-plugin-react-refresh '0.4.18'
	React Fast Refresh 기능을 위한 ESLint 플러그인으로, React 코드에서 변경된 부분만 빠르게 업데이트할 수 있도록 돕습니다.
- globals '15.14.0'
	코드에서 사용되는 전역 변수들을 정의하여, ESLint가 글로벌 변수들에 대해 경고하지 않도록 설정하는 데 사용됩니다.
- vite '6.1.0'
	빠른 빌드 도구로, React 프로젝트의 개발과 빌드를 빠르고 효율적으로 처리하는 데 사용됩니다.
### 추가 설치
- tailwindcss '4.0.7'
	유틸리티 퍼스트 CSS 프레임워크로, 빠르고 쉽게 스타일을 적용할 수 있게 해줍니다.
- @tailwindcss/vite '4.0.7'
	Vite 환경에서 Tailwind CSS를 설정하고 사용할 수 있게 해주는 플러그인입니다.
- sass-embedded '1.85.0'
	SASS에서 사용하는 내장 컴파일러로, SASS 파일을 처리하고 컴파일하는 데 필요합니다.


