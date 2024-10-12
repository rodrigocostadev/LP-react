import React from "react";
import './footerComp.css'

export default function FooterComp (){
    return(
        <div className="FOOTER">
            <div>
                <h3>MTN</h3>
                <p>Get out there & discover your next slope, mountain & destination!</p>
                <span>Copyright 2023 MNTN, Inc. Terms & Privacy</span>
            </div>
            <ul>
                <li className="first-li">More on The Blog</li>
                <li>About MNTN</li>
                <li>Contributors & Writers</li>
                <li>Write For Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
            <ul>
                <li className="first-li">More on MNTN</li>
                <li>The Team</li>
                <li>Jobs</li>
                <li>Press</li>
            </ul>
        </div>
    )
}