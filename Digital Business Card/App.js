import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Interest from "./components/interest";
import Profile from "./components/Profile";
import Social from "./components/social";

export default function App() {
    return(
        <div className="container">
            <Profile />
            <Contact />
            <About />
            <Interest />
            <Social />
        </div>
    )
}