import React from "react";
import s from "./Navbar.module.css"
import ReactAudioPlayer from "react-audio-player";

const Nav = () => {
    return <nav className={s.nav}>
        <ReactAudioPlayer
            src="my_audio_file.ogg"
            autoPlay
            controls
        />
    </nav>
}
export default Nav;

