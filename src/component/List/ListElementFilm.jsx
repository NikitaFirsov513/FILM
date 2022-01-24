import React, { useEffect, useState } from "react";
import Error from "../Error/Error.jsx";


export default function ListElementFilm(props) {
    let element = props.elem;
    //console.log(props.elem)
    let imagePathW500 = 'https://image.tmdb.org/t/p/w500/'
    //console.log(element)
    return (
        <a href={'/title/movie/' + element['id']} className="list__element">
            <div className="list__poster">
                {element['poster_path'] != null
                    ? <img src={imagePathW500 + element['poster_path']} alt="" />
                    : <Error />}
            </div>
            <div className="list__info">
                <div className="list__name">
                    <p className="list__ru-name">{element['title']}</p>
                    <p className="list__year">{element['release_date']}</p>
                </div>
                <div className="list__original-name">
                    <p>{element['original_title']}</p>
                </div>
                <div className="list__country-genre-cast">
                    <p> </p>
                    <p>{element['cast'] != undefined
                        ? element['cast'].map((elem, index) => {
                            if (index < 2) {
                                return elem['name'] + ', '
                            }
                            if (index == 2) {
                                return elem['name'] + '...'
                            }
                        })
                        : " "
                    }</p>
                    <p>{element['genres'] != undefined
                        ? element['genres'].map((elem, index) => {
                            return elem + " "
                        })
                        : " "}</p>
                </div>
                <div className="list__sub-name">
                    <p>{element['overview'].substr(0, 200) + '...'}</p>
                </div>

            </div>
            <div className="list__raiting">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p>{element['vote_average']}</p>
            </div>

        </a>
    )
}