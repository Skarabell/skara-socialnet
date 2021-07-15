import React from 'react'
import s from "./Music.module.css"

function Details(props) {
    return (
        <div className={s.c_player__details}>
            <div className={s.details_img}>
                <img src={props.song.img_src} alt="" />
            </div>
            <h3 className={s.details_title}>{props.song.title}</h3>
            <h4 className={s.details_artist}>{props.song.artist}</h4>
        </div>
    )
}

export default Details