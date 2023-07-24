import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// 0. React 엔진 - 데이터변경감지 UI 그려줌
// 1. 실행과정  --싱글페이지 애플리케이션 SPA  a태그를 사용하지못함
// 2. JSX 문법
// 3. 바벨 (자바스크립트 ES5) - > ES6




// return 시에 하나의 DOM 만 리턴할수있다.
// 변수선언시 const 와 let 만 사용 호이스팅 이슈때문 상수와 변수 const , let 
// if 사용 불가능 X >> 3항연산자
// 조건부 렌더링  (조건 && 값(true))
// css 디자인 
//  -내부에 적는방법
//  -외부 파일에 적는 방법
//  -라이브러리 사용  (부트스트랩,component-style)
let a= 10;


function App() { 
    let list=[1,2,3];
    let b = 20;
    let c;
    const [number,setNumber]=useState(1);   //React 안에 hooks 라이브러리 상태값이 됨


    const [users,setUsers]=useState([]);

  const dowload = () => {
    let sample=[
        {id:1,name:'김길동'}
        ,{id:2,name:'박길동'}
       , {id:3,name:'이길동'}
       , {id:4,name:'맹길동'}

    ];    
    setUsers([...users,...sample]);   // 둘의 차이는 users에 값이 있으면 값뒤에 추가
    setUsers([...sample]);              // users 에 덮어쓰기
    setUsers(sample);      

};


    const add = () => {
      setNumber(number+1);  //++ 안됨

    };

    console.log(1,c);
    const style1 ={
        color : "red",
    };
    // 스타일을 그냥 적으려면 {{color:'red'}} 이런식으로{}가 두개여야한다
    return (<div style={style1}>
       <button onClick={dowload}>다운</button>
       <br/>
        <h2> {users.map((u=> <h1>{u.id},{u.name}</h1>))}</h2>
        <button onClick={add}>함수뒤에()붙이면 렌더링시 실행되서 붙이면 안됨</button>
    <div>  {list.map((n) => <h1>{n}</h1>)}</div>        
        <div className='box-style'>{a===10?'10입니다':'10아닙니다'}</div>
        <h2>{b===10 &&'10입니다'}</h2>
        <Sub/>
        <h1>ㅇㅇ</h1>
        
    </div>);

}

export default App;
