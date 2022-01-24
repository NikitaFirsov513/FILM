import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header/Header.jsx";
import Footer from "../component/Footer/Footer.jsx";
import Loader from "../component/Loader/Loader.jsx";
import ContentFilm from "../ContentFilm.js";
import TvInfo from "../component/TvInfo/TvInfo.jsx";

export default function Tv() {
    let [isLoad, setIsLoad] = useState(false)
    const id = useParams().id;
    let [title, setTitle] = useState(false);



    useEffect(async () => {
        //console.log("asd")
        async function fetchData() {
            
            const resolve = await ContentFilm.getTvDetails(id);
            title = resolve;
            setTitle(title)

        }

        await fetchData()



    }, [])




    return (

        <div>
            <Header />
            {title
                ?<TvInfo id={id} title={title}  key={id}/>
                : <Loader />
            }            
            <Footer />

        </div>
    )

}