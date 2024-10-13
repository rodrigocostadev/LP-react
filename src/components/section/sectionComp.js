import React from "react";
import "./sectionComp.css"
import "../section/media.css"
// import "../sectionComp/media.css"
import img1 from "../../assets/ryan-dam-fdcEfjofIr0-unsplash.jpg"
import img2 from "../../assets/arnaud-schildknecht-46ca2KWLauM-unsplash.jpg"
import img3 from "../../assets/alan-labisch-zS5v_pTZbCQ-unsplash.jpg"

const Img1Comp = ({src, alt}) => {
    return(
        <div>
            <img src={src} alt={alt} style={{width: 300, height: 200}} ></img>
            {/* <img src={src} alt={alt} ></img> */}
        </div>
    )
}

const Img2Comp = ({src, alt}) => {
    return(
        <div>
            {/* <img src={src} alt={alt} style={{width: 400, height: 500}} ></img> */}
            <img src={src} alt={alt} ></img>
        </div>
    )
}

const Img3Comp = ({src, alt}) => {
    return(
        <div>
            {/* <img src={src} alt={alt} style={{width: 400, height: 500}} ></img> */}
            <img src={src} alt={alt} ></img>
        </div>
    )
}

export default function SectionComp (){
    return(
        <div className="SECTION">
            <section >
                <div>
                    <div className="subtitle-span">
                        <span className="number">01</span>
                        <span> GET STARTED</span>
                    </div>
                    <h2>What level of hiker are you?</h2>
                    <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide 
                        will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. 
                        What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                    <p className="p-yellow">read more &rarr;</p>
                </div>
                <Img1Comp src={img1} alt={"Imagem1"}></Img1Comp>
            </section>
            <section className="section-2">
                <Img2Comp src={img2} alt={"Imagem2"}></Img2Comp>
                <div>
                    <div className="subtitle-span">
                        <span className="number">02</span>
                        <span>HIKKING ESSENTIALS</span>
                    </div>                    
                    <h2>Picking the right Hiking Gear!</h2>
                    <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away 
                        with things you already have.
                    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get 
                    heavy and chafe wif they get sweaty or wet.</p>
                    <p className="p-yellow">read more &rarr; </p>
                </div>
            </section>
            <section>
                <div>
                    <div className="subtitle-span">
                        <span className="number">03</span>
                        <span>WHERE YOU GO IS THE KEY</span>
                    </div>
                    
                    <h2>Understand Your Map & Timing</h2>
                    <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, 
                        study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. 
                        For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                    <p className="p-yellow">read more &rarr;</p>
                </div>
                <Img3Comp src={img3} alt={"Imagem3"}></Img3Comp>
            </section>
        </div>
    )
}