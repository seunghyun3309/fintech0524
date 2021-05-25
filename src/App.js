import logo from './logo.svg';
import './App.css';
import Welcome from "./component/Welcome";
import { useState } from "react";
import ListComponent from './component/ListComponent';

// // 컴포넌트 정의
// const Welcome = ({ userData }) => {
//   console.log({ userData });
//   return <p> 안녕하세요 {userData.username}님! {userData.age}세 입니다.</p>;
// };

const App = () => {
  // state를 저장하는 부분
  const [userName, setUserName] = useState("이승현");
  // props가 여러개 필요할 때 object에 작성
  // const [object, setObjectData] = userState({userName : "lee", age: "26"});

  const changeUserName = (e) => {
    // console.log(e.target.value);
    // setUserName(e.target.value); // target의 value로 이름을 변경 (즉시 반영)
    const { value, name } = e.target;
    setUserName(value);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          안녕 리액트야.
          <Welcome userData={{ username: "Seunghyun", age: 26 }}></Welcome>
          <Welcome userData={{ username: "Changyoung", age: 24 }}></Welcome>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p>{userName} 님 안녕하세요</p>
      <input onChange={changeUserName}></input>
      <ListComponent></ListComponent>
    </div>
  );
};

export default App;
