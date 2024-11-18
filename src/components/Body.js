function Body(props) {
    // 렌더링
    // 원시형식 + 배열이 올 수 있음. => 표현식 : 값형식 or 배열 => 객체가 오지 못한다.
    // 표현식은 {} 안에 표시해야함
    // 문장중에 값을 하나 만들수 있으면 표현식.
    let a = 100;
    let b = 'hello';
    let c = [10,20,30];
    let o = {name:'hong', age:20};
    //name, age : 비구조화 문법을 사용해서 표현한다.
    //값

    return (<div>
        <p>{ props.content }</p>
        <p>{ props.children }</p>
        <br/>
        <p>
            {a}+{b}+{c}+{o.name}+{o.age}    
        </p>
    </div>);
    //content : 사용자 생성
    //children : 정의된 props

}

Body.defaultProps = {
    content : 'default body content'
}
//props의 default값을 지정.
//

export default Body;