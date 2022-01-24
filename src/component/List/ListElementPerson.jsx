import React, { useEffect, useState } from "react";
import Error from "../Error/Error.jsx";

export default function ListElementPerson(props) {

    let element = props.elem;
    //console.log(props.elem)
    let imagePathW500 = 'https://image.tmdb.org/t/p/w500/'

    return (<a href={'/title/person/' + element['id']} className="list__element">
        <div className="list__poster">
            {element['profile_path'] != null
                ? <img src={imagePathW500 + element['profile_path']} alt="" />
                :<Error/>}

        </div>
        <div className="list__info">
            <div className="list__name">
                <p className="list__ru-name">{element['name']}</p>
                <p className="list__year">{element['first_air_date']}</p>
            </div>
            <div className="list__original-name">
                <p>{element['original_name']}</p>
            </div>
            <div className="list__country-genre-cast">
                <p>{element['gender'] == 1 ? 'женщина' : 'мужчина'}</p>
                <p>{element['known_for_department']}</p>
                <p>{element['known_for'].map((elem, index) => {

                    if (elem['media_type'] == 'movie') {
                        return (index == element['known_for'].length - 1) ? elem['title'] + '...' : elem['title'] + ', '
                    }
                    if (elem['media_type'] == 'tv') {
                        return (index == element['known_for'].length - 1) ? elem['name'] + '...' : elem['name'] + ', '
                    }

                })}</p>
            </div>
            <div className="list__sub-name">
            </div>

        </div>


    </a>)

}