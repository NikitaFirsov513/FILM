import React, { useState, useEffect } from "react";
import HorisontalElem from './HorisontalElem.jsx'
import HorisontalSlyder from "./HorisontalSlyder.js";
import Error from '../Error/Error.jsx'
function HorisontalFlexLine(props) {
    let itemList = props.itemList;
    //console.log(itemList,itemList.length)
    let type = props.type;
    let slyder = new HorisontalSlyder(props.slyderName, itemList.length)
    //console.log(itemList)
    return (
        <div>

            {(itemList[0] == undefined||itemList.length<8)
                ? <></>
                : <div onClick={(e) => slyder.slydeLeft()} className="horizontal-list__arrow-left">
                    <div className="horizontal-list__arrow-left-line-top">

                    </div>
                    <div className="horizontal-list__arrow-left-line-bottom">

                    </div>
                </div>

            }
            {(itemList[0] == undefined||itemList.length<8)
                ? <></>
                : <div onClick={(e) => slyder.slydeRight()} className="horizontal-list__arrow-right">
                    <div className="horizontal-list__arrow-right-line-top">

                    </div>
                    <div className="horizontal-list__arrow-right-line-bottom">

                    </div>
                </div>}

            <div id={props.slyderName} className="horizontal-list__flex-line ">

                {itemList[0] == undefined
                    ? <div className="error-horisontal-flex-line" ><Error /></div>
                    : itemList[0]['id']
                        ? itemList.map(item =>
                            <HorisontalElem type={type} index={item['id']} item={item} key={item['id']} />)
                        : itemList.map((item, i) =>
                            <HorisontalElem type={type} item={item['file_path']} key={i} />)
                }

            </div>

        </div>


    )


}
/* 


*/

export default HorisontalFlexLine;