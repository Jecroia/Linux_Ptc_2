import Header from './components/Header.js';
import Body from './components/Body.js';

function App() {
  return (<>
    <Header title = "제목 1번" titlesub = "부가 내용"/>
    <Header title = "제목 2번"/>
    <Body content = "body content"> <button> body </button> </Body>
    <Body> <button> body </button> </Body>
  </>
    //button : body의 자식 엘리먼트
    //자식엘리먼트는 props의 children이라는 속성으로 넘겨진다.
    //flagment : 태그를 하나로 묶기 위해 리액트에서만 사용하는 태그.
    //undefined : 화면에 표시 X.
    //props : default값을 가질수 있다.
  );
}

export default App;

//jsx : javascript + xml -> 리액트가 사용.
//jsx App: 컴포넌트 -> ui를 만들어냄.
//클래스 컴포넌트 : 권장 X
//함수 컴포넌트 : 이것만 지원함.
//->사용자 태그
//tag들의 집합을 반환한다.
//return은 하나의 태그만 리턴할 수 있음.
//Component를 만들때 소문자로 만들면 안 된다. 왜? 함수와 비교하기 위해.
//component : 쪼갤수 없는 요소. 독립적으로도 실행 가능하면서도 연계 역시 가능
//component의 속성 : property -> props