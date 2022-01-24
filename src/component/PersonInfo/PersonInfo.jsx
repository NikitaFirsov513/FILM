import React, { useState, useEffect } from "react";
import HorisontalFlexLine from "../HorisontalList/HorisontalFlexLine.jsx";

export default function PersonInfo(props) {
    let id = props.id;
    let item = props.title;

    let imagePath = 'https://image.tmdb.org/t/p/original/'
    let imagePathW1280 = 'https://image.tmdb.org/t/p/w1280/'



    return (

        <div>

            <div className="title">
                <div className="title__container">
                    <div className="title__main">
                        <div className="title__view">
                            <div className="title__poster">
                                {item['profile_path'] != null
                                    ? <img src={imagePathW1280 + item['profile_path']} alt="" />
                                    : <Error />}
                            </div>
                            
                           
                        </div>
                        <div className="title__info">
                            <div className="title__title-name">
                                <div >
                                    <div className="title__russian-name">
                                        <p>{item['name']}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="title__info-list">
                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Родился</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['birthday']}</p>
                                    </div>
                                </div>

                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Страна</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['place_of_birth']}</p>
                                    </div>
                                </div>
                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Пол</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['gender'] == 1 ? 'женщина' : 'мужчина'}</p>
                                    </div>
                                </div>

                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                        <p>Карьера</p>
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['known_for_department']}</p>
                                    </div>
                                </div>


                                


                                


                                <div className="title__info-element">
                                    <div className="title__info-element-left">
                                    {item['biography']
                                    ? <p>Биография</p>
                                    :<></>}
                                        
                                       
                                    </div>
                                    <div className="title__info-element-right">
                                        <p>{item['biography']}
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
                    <HorisontalFlexLine slyderName={"images"+item['id']} key={item['id']} itemList={item['images']} />
                </div>
            </section>

            <section className="horizontal-list">
                <div className="horizontal-list__container">
                    <div className="horizontal-list__name-list">
                        <a href="#">
                            Популярное&gt;
                        </a>
                    </div>
                    <HorisontalFlexLine slyderName={"popular"+item['id']} key={item['id']} itemList={item['popular']} />
                </div>
            </section>





        </div>
    )
}