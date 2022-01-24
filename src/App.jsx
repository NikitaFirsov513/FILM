import React, { useEffect, useState } from "react";
import Main from "./pages/Main.jsx"
import Film from "./pages/Film.jsx";
import ListTopRate from "./pages/ListTopRate.jsx";
import { BrowserRouter as Router,Switch, Route, Routes, Navigate } from 'react-router-dom'
import Header from "./component/Header/Header.jsx";
import Search from "./pages/Search.jsx";
import Tv from "./pages/Tv.jsx";
import Person from "./pages/Person.jsx";
import ListAll from "./pages/ListAll.jsx";

function App() {



    return (
       <Router>
            <Routes>

                <Route exact path="/" element={<Main />} />
                <Route exact path="/title/movie/:id" element={<Film />} />
                <Route exact path="/title/tv/:id" element={<Tv />} />
                <Route exact path="/title/person/:id" element={<Person />} />
                <Route exact path="/list/topRate/:page" element={<ListTopRate />} />
                <Route exact path="/search/:filter/:query/:page" element={<Search />} />
                <Route exact path="/list/:filter/:type/:page" element={<ListAll />} />


            </Routes>
        </Router>
    )
}/*


*/
export default App