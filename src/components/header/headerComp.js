import React from "react";
// import { HeaderStyle } from "../styled Components/styles";
import "./headerComp.css"
import "../header/media.css"

export default function HeaderComp (){
    return(
        <header className="HEADER">
            <div>
                <p>MTN</p>
            </div>
            <div className="nav-header">
                <p>Equipment</p>
                <p>About us</p>
                <p>Blog</p>
            </div>
            <div className="nav-header">
                <p>Account</p>
            </div>
        </header>
    )
}