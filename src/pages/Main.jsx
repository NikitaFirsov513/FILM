import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header.jsx";
import NowPlay from "../component/NowPlayList/NowPlay.jsx";
import TopRate from "../component/HorisontalList/TopRate.jsx";
import Footer from "../component/Footer/Footer.jsx";
import TopRateTv from "../component/HorisontalList/TopRateTv.jsx";
import PopularMovie from "../component/HorisontalList/PopularMovie.jsx";
import PopularTv from "../component/HorisontalList/PopularTv.jsx";


function Main() {

    return (
        <div>
            <Header />
            <NowPlay />
            <TopRate />

            <TopRateTv />
            <PopularMovie />
            <PopularTv/>
            <Footer />
        </div>
    )
}
export default Main