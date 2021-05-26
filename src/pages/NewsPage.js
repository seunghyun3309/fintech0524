import axios from 'axios';
import React, {useState} from 'react';
import Header from '../component/common/Header';
import NewsList from '../component/news/NewsList';
import Search from '../component/news/Search';

  // header 는 계속해서 재활용해서 사용하고 싶어
const NewsPage = () => {
    const [news, setnews]=useState([]);
    const[searchText, setSearchText]=useState("");

    const handleChangeInput = (e)=>{
        //searchText 변경
        const{value, name} = e.target;
        console.log(value);
        setSearchText(value);
    };
    const handleClickSearchButton=()=>{
        //axios 요청 보내기
        console.debug("test");
        let newsUrl = `https://newsapi.org/v2/everything?from=2021-04-26&sortBy=publishedAt&q=${searchText}&apiKey=640b002abc4e408f8faca41d87f7ee54&language=ko`;
        axios.get(newsUrl)
        .then((response)=>{
        let resultNewsList = response.data.articles;
        setnews(resultNewsList);
        });
    };

    return (
        <div>
          <Header title = "뉴스 검색"></Header>
           {/* Header 컴포넌트 작성*/}
          <Search
          handleChangeSearchInput = {handleChangeInput}
          handleClickSearchButton={handleClickSearchButton}></Search>
          <NewsList news={news}></NewsList>
           {/* Search 컴포넌트 작성*/}
           {/* NewsList 컴포넌트 작성*/}

        </div>
    );
};

export default NewsPage;
