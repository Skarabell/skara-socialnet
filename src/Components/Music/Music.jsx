import React, {useEffect, useState} from 'react'
import Player from "./Player";
import s from "./Music.module.css"


const Music = () => {
    const [songs] = useState([
        {
            title: "Под фанарём",
            artist: "Rasa",
            img_src: "https://cdnimg.zaycev.net/commonImage/84270_square250.jpg",
            src: "https://cdndl.zaycev.net/track/7132043/7WGNpa5Vhuv37gVGy5uCQziKxLBKD936vGF9vNwztragVBuHAbCKafMvWGQtBvjqx6s1Lr8CneuoPEtCiNU4Kqa2WzLq8aPFQUiVT61aeFb4t6J8bdyTj1EATJGn8rTneyjQyvLZXFQvmkS6sFqQqrJF6Ak8WJZMpZELvCrdrvbeqMwNJurAEw1wczxQ581E3W9UMr2k3onYHLhFfBgRhHiXp2mdwhHgdmNRPZYwX81SGSdd8357ySqABY9qZKSoguaJ7TtKps5vwrdxhZEfimnNGie6YV6NPJojjePZGCk1qzbQdrJ7gEt2BS9vwrzBr1cdXmTT9LowuvmqzVr8vzgoA31iExeztZT9AFAUuaWqXMJ8VS1KkpNnPs9pKi3XiHwLVcXtdnD1aX8yKJVggdz4jVDGCVzdB8EZK2NngStGLsT4jqssrF3KuJZTRDi8KNR9KLV9MzK"
        },
        {
            title: "Малый повзраслел",
            artist: "Макс Корж",
            img_src: "https://cdnimg.zaycev.net/commonImage/album/track/9174/square800.jpg",
            src: "https://cdndl.zaycev.net/track/24511644/9qffoc48Jx13FRUR9LXCxZKVn1LRcPrBXXZSizx543pmvNhi3tqCYF7FUPRxASFcvWFCZAsTLh1v77W4Rkd6iehb5R4tUzGqntJ5dk7wz8ErFXomfgkSndPCA8v3TPWUCYmb5FU49giFwMCGJtqLyqjzTtY5ntnqUZtKqvVBBfBZyZybaGEStyQtbbXPqebJyz1pSoyHhUZfQcPXviWtQdv8xYWukQTrjiYCiPPjot6A9PKPV3Z7z1L49bXPU7t7yqvpWRc5L62ynwKM2MYaFbm93ifq98YQ4A7UoLprZ8aSHgAq4RU1pFE48kpbkjKErX4rwBweGfgGb51Gf2SiXi5xbyiS5CiArukhqm9h9vZAZcbQr1MEQbHwq5moZfKWjo43JoSkuZZbgyJAyidXibuRpiVt6VYzAmW1vr8bq2gDXUEnmLB6CrHCXgrw863TfDZDrEnhMhFJ9YJ9yKoYiUPpt1yuUvuY"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            img_src: "https://source.unsplash.com/random",
            src: "../../music/on-n-on.mp3"
        },
        {
            title: "Song 4",
            artist: "Artist 4",
            img_src: "https://source.unsplash.com/random",
            src: "../../music/somebody-new.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0
            } else {
                return currentSongIndex + 1
            }
        })
    }, [currentSongIndex])

    return (
        <div className={s.Player}>
            <Player currentSongIndex={currentSongIndex}
                    nextSongIndex={nextSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    songs={songs}
            />
        </div>
    )
}
export default Music
