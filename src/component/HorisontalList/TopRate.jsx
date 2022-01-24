import React, { useState, useEffect } from "react";
import ContentFilm from '../../ContentFilm'
import HorisontalFlexLine from "./HorisontalFlexLine.jsx";

function TopRate() {
    let [topRate, setTopRate] = useState([])

    useEffect(async () => {
        await fetchData()
    }, [])

    async function fetchData() {
        const resolve = await ContentFilm.getTopRate();
        topRate = resolve;
        setTopRate(topRate);
        //console.log(topRate)
    }


    return (
        <section className="horizontal-list">
            <div className="horizontal-list__container">
                <div className="horizontal-list__name-list">
                    <a href="/list/top_rated/movie/1">
                        Фильмы с лучшей оценкой&gt;
                    </a>
                </div>
                {topRate
                    ? <HorisontalFlexLine type='movie' slyderName={'main-toprate'} itemList={topRate} />
                    : <></>}

            </div>
        </section>
    )
}
export default TopRate