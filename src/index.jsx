import '/css/main.css';
import '/css/loader.css';

//import './.htaccess'
import '/css/main.scss';
import './img/big-poster.jpg';
import './img/poster.jpg';

import ReactDOM from 'react-dom';



import React from 'react'
import App from './App.jsx'
/*
import { render } from 'react-dom'
import NowPlayListBigItem from './component/NowPlayList/NowPlayListBigItem.jsx';
import NowPlay from './component/NowPlayList/NowPlay.jsx';
import { useState } from 'react/cjs/react.development';
import ContentFilm from './ContentFilm';
import loader from './Loader';
*/
require("babel-core/register");
require("babel-polyfill");


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)



/*
run();


async function run() {
    //console.log
    const content = await new ContentFilm();
    await content.loadData().then(res => {


        runApp(content)
        loader.disLoader()

    })
}

function runApp(content) {
    //console.log(content.nowPlayList)
    //const [isLoad,setIsLoad] = useState(false);


    const App = () => (
        <div >
            <NowPlay items={content.nowPlayList} key={content.version} />

        </div>
    );

    render(<App />, document.getElementById('app'))

}*/