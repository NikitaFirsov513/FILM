import React, { useState, useEffect } from "react";
import NowPlayListBigItem from "./NowPlayListBigItem.jsx";
import NowPlayListSmallItem from "./NowPlayListSmallItem.jsx";

import ContentFilm from '../../ContentFilm'
import NowPlayListSlyder from './NowPlayListSlyder.js'
import Loader from '../Loader/Loader.jsx'

require("babel-core/register");
require("babel-polyfill");

function NowPlay() {


    let [nowPlay, setNowPlay] = useState();
    let indexBig = 0;
    let indexSmall = 0;

    let slyder = new NowPlayListSlyder('now-play__flex-line', 20, 'now-play__nav-flex-line');

    window.onload = loadWindow;


    useEffect(async () => {
        await fetchData();
        slyder.setActiveElem();
    }, [])

    const [count, setCount] = useState(0);

    async function fetchData() {

        const resolve = await ContentFilm.getNowPlay();
        nowPlay = resolve;
        setNowPlay(nowPlay);

    }

    function loadWindow() {

    }

    return (
        <main className="now-play">
            <div className="now-play__container">

                <div className="now-play__main">
                    <div id="progres" className="now-play__progres"></div>


                    <div onClick={(e) => slyder.slydeLeft()} className="now-play__button now-play__arrow-left ">
                        <div className="now-play__fig">
                            <div className="now-play__arrow-left-line-top"></div>
                            <div className="now-play__arrow-left-line-bottom"></div>
                        </div>
                    </div>



                    <div onClick={(e) => slyder.slydeRight()} className="now-play__button now-play__arrow-right ">
                        <div className="now-play__fig">
                            <div className="now-play__arrow-right-line-top"></div>
                            <div className="now-play__arrow-right-line-bottom"></div>
                        </div>
                    </div>




                    <div id="now-play__flex-line" className="now-play__flex-line">
                        {nowPlay
                            ? nowPlay.map(itemNowPlay =>
                                <NowPlayListBigItem slyder={slyder} index={indexBig++} item={itemNowPlay} key={itemNowPlay['id']} />
                            )
                            : <Loader/>}
                    </div>
                </div>

                <div className="now-play__nav">
                    <div onClick={(e) => slyder.nowPlaySliderSmallTop()} className="now-play__nav-top now-play__button now-play__button--none">
                        <div className="now-play__nav-top-left"></div>
                        <div className="now-play__nav-top-right"></div>
                    </div>

                    <div id="now-play__nav-flex-line" className="now-play__nav-flex-line">

                        {nowPlay ?
                            nowPlay.map((itemNowPlay, i) =>
                                <NowPlayListSmallItem slyder={slyder} index={indexSmall++} item={itemNowPlay} key={itemNowPlay['id']} />
                            )
                            : <Loader/>}


                    </div>

                    <div onClick={(e) => slyder.nowPlaySliderSmallBottom()} className="now-play__nav-bottom now-play__button ">
                        <div className="now-play__nav-bottom-left"></div>
                        <div className="now-play__nav-bottom-right"></div>
                    </div>


                </div>
            </div>
        </main>
    );

}

export default NowPlay;
