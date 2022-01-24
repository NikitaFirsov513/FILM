import React from 'react';
import { Link } from 'react-router-dom';

const NowPlayListBigItem = (props) => {
    let imagePath = 'https://image.tmdb.org/t/p/original/'
    let imagePathW1280 = 'https://image.tmdb.org/t/p/w1280/'
    let imagePathW500 = 'https://image.tmdb.org/t/p/w500/'


    const item = props.item;
//    console.log(item['video'])


    let test = (e)=>{

        console.log(props.index)

    }


    return (
        <div onClick={(e)=>test(e)} className="now-play__big-post">
            <div className="now-play__back">
                <img src={imagePathW1280+item['backdrop_path']} alt="" />
            </div>

            <div className=" now-play__play">
                <a href={'https://www.youtube.com/watch?v='+item['video']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                </a>
            </div>

            <div className="now-play__gradient"></div>
            <div className="now-play__info">
                <div className="now-play__post">
                    <img src={imagePathW500+item['poster_path']} alt="" />
                </div>

                <a href={'/title/movie/'+item['id']} className="now-play__content">

                    <div className="now-play__title">
                        <p>{item['title']}</p>
                    </div>
                    <div className="now-play__sub-title">
                        <p>{item['overview'].substr(0, 200)+'...'}</p>
                    </div>
                    <div className="now-play__rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <p>{item['vote_average']}</p>
                    </div>

                </a>
            </div>
        </div>
    );
}

export default NowPlayListBigItem;