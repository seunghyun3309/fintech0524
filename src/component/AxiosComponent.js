//react arrow function component exportdefault 
import React, { useState } from 'react';
import axios from "axios";

//버튼을 클릭하면 특정위치에 데이터 요청
const AxiosComponent = () => {
    // const [data, setdata] = useState(""); // 데이터 표시하기
    const getData = () => {
        // 비동기 함수 async function : 이 친구가 작동하는 동안 다른 웹사이트 작동
        // 순차적 작동(get이 끝나고 then 실행)하게 하려면 promise 사용해야
        axios
            .get(
                "https://newsapi.org/v2/everything?from=2021-04-26&sortBy=publishedAt&q=코로나&apiKey=980b0109ed0745b687a5fa93d73e2184&language=ko"
                )
            .then(function (response) {
                //lazyData = response.data;
                // setdata(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                //alwasys executed
            });
        //setdata(lazyData); -> 아무런 반응이 없어 -> 랜더링 실패
    };

    return (
        <div>
            <button onClick={getData}> 데이터 가져오기</button>
        </div>
    );
};

export default AxiosComponent;