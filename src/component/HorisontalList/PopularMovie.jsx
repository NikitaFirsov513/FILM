import React, { useState, useEffect } from "react";
import ContentFilm from '../../ContentFilm'
import HorisontalFlexLine from "./HorisontalFlexLine.jsx";

export default function PopularMovie() {

    let [popular, setPopular] = useState([])

    useEffect(async () => {
        await fetchData()
    }, [])

    async function fetchData() {
        const resolve = await ContentFilm.getPopularMovie();
        popular = resolve;
        setPopular(popular);
        //console.log(topRate)
    }

    return (
        <section className="horizontal-list">
            <div className="horizontal-list__container">
                <div className="horizontal-list__name-list">
                <a href="/list/popular/movie/1">
                        Популярные фильмы&gt;
                    </a>
                </div>
                {popular
                    ? <HorisontalFlexLine type='movie' slyderName={'main-popular-movie'} itemList={popular} />
                    : <></>}

            </div>
        </section>
    )

}