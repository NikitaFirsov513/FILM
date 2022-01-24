import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header.jsx";
import { useParams } from "react-router-dom";
import ContentFilm from "../ContentFilm.js";
import List from "../component/List/List.jsx";
import Footer from "../component/Footer/Footer.jsx";

export default function ListAll() {

    let [filter, type, page] = [useParams().filter, useParams().type, useParams().page]

    let [list, setList] = useState([])
    let [totalPage, setTotalPage] = useState();
    let key = (page * totalPage).toString() + filter
    let name;
    useEffect(async () => {
        await fetchData()
    }, [])
    async function fetchData() {

        const [resolve, tPage] = await ContentFilm.getListAll(filter, type, page)
        list = resolve
        totalPage = tPage
        setList(list)
        setTotalPage(totalPage)
        console.log(list)
        name = setName();
    }
    function setName() {
        let n = '';


        switch (filter) {
            case 'top_rated':
                n += 'Сортировка по лучшему рейтингу';
                break;

            default:
                break;
        }
        return n;
    }
    return (

        <div>
            <Header />
            <List url={'/list/' + filter + '/' + type + '/'} key={key} page={page} totalPage={totalPage} name={name} type={type} listTopRate={list} />
            <Footer />
        </div>
    )
}