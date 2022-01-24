import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header.jsx";
import List from "../component/List/List.jsx";
import ContentFilm from "../ContentFilm.js";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer.jsx";

export default function ListTopRate() {
    let [listTopRate, setListTopRate] = useState([])
    const page = useParams().page;
    let [totalPage,setTotalPage]=useState();
    useEffect(async () => {
        await fetchData()
    }, [])

    async function fetchData() {

        const [resolve,tPage] = await ContentFilm.getTopRatePage(page)
        listTopRate = resolve;
        totalPage=tPage;
        setListTopRate(listTopRate)
        setTotalPage(totalPage)
        
    }

    return (

        <div>
            <Header />
            <List url={'/list/topRate/'} key={(page*totalPage).toString+"Лучший рейтинг"} page={page} totalPage={totalPage} name="Лучший рейтинг" type="movie" listTopRate={listTopRate} />
            <Footer/>
        </div>
    )   
}