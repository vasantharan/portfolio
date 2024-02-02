import React from "react";
import Navbarblog from "./Navbarblog";
import Author from "./author";
import BlogContent from "./blogcontent";
import Footer from "./Footer";
function Blog(){
    return(
        <>
        <Navbarblog/>
        <BlogContent/>
        <Author/>
        <Footer/>
        </>
    );
}
export default Blog