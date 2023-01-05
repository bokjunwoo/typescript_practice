import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './index';

// 1. 일반변수, 함수 만들 때 타입지정 잘 하기
// 2. JSX 표현하는 타입 있음
let box:JSX.Element = <div></div>;


function App() {
  return (
    <div className="App">
      <h1>안녕</h1>
      <Profile></Profile>
      <Props name='준우' age='25'></Props>
      {box}
      <UseState></UseState>
      <Count></Count>
    </div>
  );
}

// 3. 컴포넌트 만들 때 타입 지정(함수 타입지정은 파라미터 & return 값)
function Profile() :JSX.Element {
  return (
    <div>프로필</div>
  )
}

// 4. 컴포넌트 props 타입지정
function Props(props :{name :string, age :string}) :JSX.Element {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  )
}

// 5. useState 타입지정
function UseState() {
  let [user] = useState('bok') // 자동으로 타입지정
  
  // string 또는 number의 타입이 들어올 경우 Generic
  let [age] = useState<string | number>('25')
  
  return (
    <div>{user}{age}</div>
  )
}

// rudex
function Count() {
  // dispatch() 타입지정
  const dispatch = useDispatch();
  const count = useSelector((state : RootState) => state);

  return(
    <div>
      {count.count}
      <button onClick={() => {dispatch({type : '증가'})}}>버튼</button>
    </div>
  )
}


export default App;
