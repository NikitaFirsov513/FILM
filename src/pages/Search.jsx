import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header.jsx";
import { useParams } from "react-router-dom";
import ContentFilm from "../ContentFilm.js";
import List from "../component/List/List.jsx";
import Footer from "../component/Footer/Footer.jsx";


export default function Search(){

    let [sort,query,page]=[useParams().filter,useParams().query,useParams().page]
    let [listSearch, setListSearch]=useState([])
    let [totalPage,setTotalPage]=useState();
    let key = (page*totalPage).toString()+query
    //console.log(sort) 
    useEffect(async () => {
        await fetchData()
    }, [])
    //console.log('/search/'+sort+'/'+query+'/')
    async function fetchData() {

        
        const [resolve,tPage] = (sort=='person')?await ContentFilm.getSearchPerson(sort,query,page) : await ContentFilm.getSearch(sort,query,page)
        listSearch = resolve;
        totalPage=tPage
        setListSearch(listSearch)
        setTotalPage(totalPage)

        console.log(listSearch)
    }


    return(

        <div>
            <Header/>
            <List url={'/search/'+sort+'/'+query+'/'} key={key} page={page} totalPage={totalPage} name={"Результаты по запросу '"+ decodeURI(query)+"'"} type={sort} listTopRate={listSearch} />
            <Footer/>
        </div>
    )
}