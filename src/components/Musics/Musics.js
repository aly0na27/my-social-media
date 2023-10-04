// import s from "./Musics.module.css"

import Song from "./Song/Song";

function Musics(props) {
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