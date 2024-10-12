import React from "react";
// import img from "../../assets/ana-frantz-y1TqsDClhKM-unsplash.jpg"
import "./mainComp.css"
// import Header from "../header/header";
import HeaderComp from "../header/headerComp";

export default function MainComp (){
    return(
        <div className="MAIN">
            <HeaderComp></HeaderComp>
            <article>
                <h5>A Hikking Guide</h5>
                <h1>Be Prepared For The Mountais And Beyond!</h1>
                <h6>Scroll Down</h6>
                <section></section>
            </article>
            {/* <section className="section-1">
                <div>
                    <span>01</span>
                    <p>GET STARTED</p>
                    <h2>What level of hiker are you?</h2>
                    <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide 
                        will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. 
                        What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                    <p>read more</p>
                </div>
                <div>img</div>
            </section> */}
            
        </div>
    )
}