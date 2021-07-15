import React from 'react'
import s from "./Music.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className={s.c_player__controls}>
            <button className={s.skip_btn} onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className={s.play_btn} onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className={s.skip_btn} onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls