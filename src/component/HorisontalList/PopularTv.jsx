import React, { useState, useEffect } from "react";
import ContentFilm from '../../ContentFilm'
import HorisontalFlexLine from "./HorisontalFlexLine.jsx";



export default function PopularTv() {

    let [popular, setPopular] = useState([])

    useEffect(async () => {
        await fetchData()
    }, [])

    async function fetchData() {
        const resolve = await ContentFilm.getPopularTv();
        popular = resolve;
        setPopular(popular);
        //console.log(topRate)
    }

    return (
        <section className="horizontal-list">
            <div className="horizontal-list__container">
                <div className="horizontal-list__name-list">
                <a href="/list/popular/tv/1">
                        Популярные сериалы&gt;
                    </a>
                </div>
                {popular
                    ? <HorisontalFlexLine type='tv' slyderName={'main-popular-tv'} itemList={popular} />
                    : <></>}

            </div>
        </section>
    )

}