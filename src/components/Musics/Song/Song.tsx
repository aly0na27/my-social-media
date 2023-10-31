import s from "./Song.module.css"
import * as React from "react";
import {SongType} from "../../../redux/musics-reducer";

type PropsType = {
    addSong: (id: number) => void,
    deleteSong: (id: number) => void,
    song: SongType
}

const Song: React.FC<PropsType> = ({addSong, deleteSong, song}) => {
    return (
        <div className={s.item}>
            {song.id}
            {song.name}
            {song.musicians}
            <div>
                {
                    song.status ?
                        <button onClick={() => deleteSong(song.id)}>delete</button>
                        : <button onClick={() => addSong(song.id)}> add</button>}
            </div>
        </div>
    )
}

export default Song;
