import React, { useState, useEffect } from "react";


function HorisontalElem(props) {
    let item = props.item;
    let imagePathW500 = 'https://image.tmdb.org/t/p/w500/'
    let imagePath = 'https://image.tmdb.org/t/p/original/'
    let [openIpage, setOpenImage] = useState(false)
    let id = item['id']
    let type=props.type;


    function toggleImage() {
        openIpage = !openIpage;
        setOpenImage(openIpage);
        
    }

    return (
        <div className="horizontal-list__elem">

            {item['vote_average']
                ? <div className="horizontal-list__raiting">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p>{item['vote_average'].toFixed(1)}</p>
                </div>
                : <></>
            }
            <div className="horizontal-list__poster">
                {item['poster_path']
                    ? <a   href={"/title/"+type+'/' + item['id']}><img title={type=='tv'?item['name']:item['title']}src={imagePathW500 + item['poster_path']} alt="" /></a>
                    : < img  onClick={(e) => toggleImage()} src={imagePathW500 + item} alt="" />
                }
                {openIpage
                    ? <div onClick={(e) => toggleImage()} className="horizontal-list__originalImage">
                        < img  src={imagePath + item} alt="" />
                    </div>
                    : <></>
                }

            </div>
        </div>
    )

}
export default HorisontalElem