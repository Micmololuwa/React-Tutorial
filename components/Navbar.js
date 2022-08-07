import React from "react"
import "../style.css"

export default function Navbar() {
    return (

        <nav>
            <div className="logo"> 
                <img className="image" src="../images/reactjs-icon.png" />
                <h1 className="logo-text" >ReactFacts</h1>
            </div>

            <h2 className="navigation">React Course - Project 1</h2>
        </nav>
        
    )
}