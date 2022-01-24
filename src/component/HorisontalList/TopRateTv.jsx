import React, { useState, useEffect } from "react";
import ContentFilm from '../../ContentFilm'
import HorisontalFlexLine from "./HorisontalFlexLine.jsx";

export default function TopRateTv() {
    let [topRate, setTopRate] = useState([])

    useEffect(async () => {
        await fetchData()
    }, [])

    async function fetchData() {
        const resolve = await ContentFilm.getTopRateTv();
        topRate = resolve;
        setTopRate(topRate);
        //console.log(topRate)
    }
    return (
        <section className="horizontal-list">
            <div className="horizontal-list__container">
                <div className="horizontal-list__name-list">
                    <a href="/list/top_rated/tv/1">
                        Сериалы с лучшей оченкой&gt;
                    </a>
                </div>
                {topRate
                    ? <HorisontalFlexLine type='tv' slyderName={'main-toprate-tv'} itemList={topRate} />
                    : <></>}

            </div>
        </section>
    )
}