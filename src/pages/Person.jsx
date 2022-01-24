import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header/Header.jsx";
import PersonInfo from "../component/PersonInfo/PersonInfo.jsx";
import ContentFilm from "../ContentFilm.js";
import Footer from "../component/Footer/Footer.jsx";
import Loader from "../component/Loader/Loader.jsx";

export default function Person (){

    let [isLoad,setIsLoad]=useState(false)
    const id = useParams().id;
    let [title, setTitle] = useState(false);


    useEffect(async () => {
        //console.log("asd")
        async function fetchData() {
            
            const resolve = await ContentFilm.getDetailsPerson(id);
            title = resolve;
            setTitle(title)
            console.log(title)
        }

        await fetchData()



    }, [])



    return (
        <div >
            <Header />
            {title
                ?<PersonInfo id={id} title={title}  key={id}/>
                :<Loader/>
            }
            <Footer/>
        </div>
    )
}