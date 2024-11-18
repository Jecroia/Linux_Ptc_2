//function Header(props)
function Header({title, titlesub}) {
    //비구조화 문법을 사용해서 props의 속성 이름을 받아와서 사용.
    return (<div>
        <h1>{ title } + { titlesub }</h1>
    </div>);
}

export default Header;
//export는 보통 아래에다가 명시함