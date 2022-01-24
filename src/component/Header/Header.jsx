import React from "react";
import { Link } from 'react-router-dom';
import Filter from "./Filter"
import ContentFilm from "../../ContentFilm";

export default function Header() {
    let filter = new Filter();

    function find(e) {
        e.preventDefault()
        let element = document.getElementById('inputFind');

        if(element.value==""){
            return 0;
        }
        
        let sort = document.getElementById('fiterValue').textContent;
        let sortValue;
        switch (sort) {
            case 'фильмы':
                sortValue='movie';
                break;
            case 'сериалы':
                sortValue='tv';
                break;
            case 'люди':
                sortValue='person';
                break;
            default:
                break;
        }

        document.location.href = '/search/'+sortValue+'/'+encodeURI(element.value)+'/1';
        

    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/">film</a>
                </div>
                <div className="header__search">
                    <div className="header__filter">
                        <p onClick={(e) => filter.toggleNotActive()} id="fiterValue">фильмы</p>
                        <ul className="header__sort-list header__sort-list--not-active">
                            <li onClick={(e) => filter.changeFilterValue('сериалы')}>сериалы</li>
                            <li onClick={(e) => filter.changeFilterValue('фильмы')}>фильмы</li>
                            <li onClick={(e) => filter.changeFilterValue('люди')}>люди</li>
                        </ul>
                    </div>

                    <div className="header__form">
                        <form onSubmit={(e) => find(e)} action="">
                            <input id='inputFind' type="text"></input>
                        </form>
                        <svg onClick={(e) => find(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )

}