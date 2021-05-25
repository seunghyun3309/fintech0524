//react arrow function component exportdefault 
import React, {useState} from 'react';
import axios from "axios";

//버튼을 클릭하면 특정위치에 데이터 요청
const AxiosComponent = () => {
    const [data, setdata]=useState(""); // 데이터 표시하기
    const getData = () => {
        axios
            .get("https://naver.com")
            .then(function (response) {
                //handle success
                setdata(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                //alwasys executed
            });
    };

    return (
        <div>
            <button onClick={getData}> 데이터 가져오기</button>
            {data}
        </div>
    );
};

export default AxiosComponent;