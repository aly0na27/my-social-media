// import s from "./Musics.module.css"

import Song from "./Song/Song";
import {Navigate} from "react-router-dom";

function Musics(props) {
    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }
    let musics = props.musics.map((m) => {
        return <Song key={m.id}
                     id={m.id}
                     name={m.name}
                     musicians={m.musicians}
                     status={m.status}
                     add={props.add}
                     delete={props.delete}
        />
    })
    return (
        <div>
            {musics}
        </div>
    );
}

export default Musics;