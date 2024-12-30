//import React from "react";
import '../../assets/css/NavBar.css'
var NavBar = () =>{
    var styling = {
        backgroundColor: "black",
        fontSize: "100px",
        color: "orange",
        textDecoration: "underline",
    }
    return(
        <header>
            <h1 style={styling}>This is Navigation Bar</h1>
            <h2 id='idSEg'>Testing Styling</h2>
        </header>
    )
}
export default NavBar;
