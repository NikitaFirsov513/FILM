import React, { useEffect, useState } from "react";
import ListElementFilm from "./ListElementFilm.jsx";
import ListNav from "./ListNav.jsx";
import ListElementTV from "./ListElementTV.jsx";
import Loader from "../Loader/Loader.jsx";
import ListElementPerson from "./ListElementPerson.jsx";

export default function List(props) {

    let list = props.listTopRate;
    let type = props.type;
    let name = props.name;
    let page = props.page;
    let totalPage = props.totalPage;
    let url = props.url;
    //console.log(list)
    return (
        <div>
            <div className="list">
                <div className="list__container">
                    <div className="list__lable">
                        <p>{name}</p>
                    </div>
                    <div className="list__flex-container">
                        {list[0] != undefined
                            ? list.map(elem => {
                                if (type == "movie") {
                                    return <ListElementFilm key={elem['id']} elem={elem} />
                                }
                                if (type == "tv") {
                                    return <ListElementTV key={elem['id']} elem={elem} />
                                }
                                if (type == "person") {
                                    return <ListElementPerson key={elem['id']} elem={elem} />
                                }
                            })
                            : <Loader/>}


                    </div>

                    <ListNav url={url}  key={(page*totalPage).toString()}  page = {page} totalPage={totalPage} />

                </div>
            </div>
        </div>
    )
}