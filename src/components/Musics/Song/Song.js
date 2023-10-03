import s from "./Song.module.css"

function Song(props) {

    return (
        <div className={s.item}>
            {props.id}
            {props.name}
            {props.musicians}
            <div>
                {props.status ? <button onClick={() => props.delete(props.id)}>delete</button> : <button onClick={() => props.add(props.id)}> add</button>}
            </div>
        </div>
    )
}

export default Song;
