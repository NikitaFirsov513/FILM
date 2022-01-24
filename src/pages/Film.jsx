import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header/Header.jsx";
import FilmInfo from "../component/FilmInfo/FilmInfo.jsx";
import ContentFilm from "../ContentFilm.js";
import Footer from "../component/Footer/Footer.jsx";
import Loader from "../component/Loader/Loader.jsx";

function Film() {
    let [isLoad,setIsLoad]=useState(false)
    const id = useParams().id;
    let [title, setTitle] = useState(false);
   
    
    useEffect(async () => {
        //console.log("asd")
        async function fetchData() {
            
            const resolve = await ContentFilm.getDetails(id);
            title = resolve;
            setTitle(title)
        }

        await fetchData()



    }, [])



    return (
        <div >
            <Header />
            {title
                ?<FilmInfo id={id} title={title}  key={id}/>
                :<Loader/>
            }
            <Footer/>
        </div>
    )
}
export default Film