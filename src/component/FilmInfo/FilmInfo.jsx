import React, { useState, useEffect } from "react";
import ContentFilm from "../../ContentFilm";
import HorisontalFlexLine from "../HorisontalList/HorisontalFlexLine.jsx";
export default function FilmInfo(props) {
    let id = props.id;
    let item = props.title;

    let imagePath = 'https://image.tmdb.org/t/p/original/'
    let imagePathW1280 = 'https://image.tmdb.org/t/p/w1280/'
    let imagePathW500 = 'https://image.tmdb.org/t/p/w500/'

    return (
        <div>

            <div className="title">
                <div className="title__container">
                    <div className="title__main">
                        <div className="title__view">
                            <div className="title__poster">
                                <img src={imagePathW1280 + item['poster_path']} alt="" />
                            </div>
                            <div className="title__trailer">
                                <a href={'https://www.youtube.com/watch?v=' + item['video']}>Трейлер</a>
                            </div>
                            <div className="title__providers">
                                <p>
                                    Где посмотреть
                                </p>
                                <div className="title__providers-list" >
                                    {item['providers'] == undefined
                                        ? <p>А в общем-то нигде</p>
                                        : item['providers'].map(elem => <img title={elem['provider_name']} key={elem['provider_id']} src={imagePath + elem['logo_path']} />)}
                                </div>
                            </div>
                        </div>
                        <div className="title__info">
                            <div className="title__title-name">
                                <div >
                                    <div className="title__russian-name">
                                        <p>{item['title']}</p>
                                    </div>
                                    <div className="title__original-name">
                                        <p>{item['original_title']}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="title__info-list">
                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Релиз</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['release_date']}</p>
                                    </div>
                                </div>

                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Страны</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['production_countries'].map(elem => elem['iso_3166_1'] + " ")}</p>
                                    </div>
                                </div>
                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Жанры</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['genres'].map(elem => elem['name'] + " ")}</p>
                                    </div>
                                </div>


                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>В главной роле</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p> {item['cast'].map((elem, i) => {
                                            if (i > 2) {
                                                return
                                            }
                                            if (i == item['cast'].length - 1 || i == 2) {
                                                return (<a href={'/title/person/' + elem['id']}>{elem['name']}</a>)
                                            }
                                            return (<a href={'/title/person/' + elem['id']}>{elem['name'] + ', '}</a>)
                                        })} </p>                                    </div>
                                </div>


                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Компании</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['production_companies'].length >= 3
                                            ? item['production_companies'][0]['name'] + ', ' + item['production_companies'][1]['name'] + '...'
                                            : item['production_companies'].map((elem, i) => {
                                                if (i == (item['production_companies'].length - 1)) {
                                                    return elem['name']
                                                }
                                                return elem['name'] + ', '
                                            })}</p>
                                    </div>
                                </div>


                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Описание </p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['overview']}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="horizontal-list">
                <div className="horizontal-list__container">
                    <div className="horizontal-list__name-list">
                        <a href="#">
                            Изображения&gt;
                        </a>
                    </div>
                    <HorisontalFlexLine slyderName={"images" + item['id']} key={item['id']} itemList={item['images']} />
                </div>
            </section>
            <section className="horizontal-list">
                <div className="horizontal-list__container">
                    <div className="horizontal-list__name-list">
                        <a href="#">
                            Рекомндации&gt;
                        </a>
                    </div>
                    <HorisontalFlexLine type='movie' slyderName={"recommendation" + item['id']} key={item['id']} itemList={item['recommendation']} />
                </div>
            </section>
        </div>
    )
}