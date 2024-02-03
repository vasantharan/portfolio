import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blog from "./components/blog";
import Main from "./main";
import First from "./components/first";
function Routess()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/1" element={<First/>}/>
            </Routes> 
        </BrowserRouter>
    )
}
export default Routess;