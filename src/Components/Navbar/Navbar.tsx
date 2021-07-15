import React from "react";
import s from "./Navbar.module.css"
import Music from "../Music/Music";

const Nav = () => {
    return <nav className={s.nav}>
        <Music />
    </nav>
}
export default Nav;

