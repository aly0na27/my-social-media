import Song from "./Song/Song";
import * as React from "react";
import {SongType} from "../../redux/musics-reducer";

type PropsType = {
    addSong: (id: number) => void,
    deleteSong: (id: number) => void,
    musics: Array<SongType>
}

const Musics: React.FC<PropsType> = ({addSong, musics, deleteSong}) => {
    return (
        <div>
            {
                musics.map((m) => {
                    return <Song key={m.id}
                                 song={m}
                                 addSong={addSong}
                                 deleteSong={deleteSong}
                    />
                })
            }
        </div>
    );
}

export default Musics;