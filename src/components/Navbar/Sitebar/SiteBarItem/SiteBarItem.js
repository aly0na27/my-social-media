import s from "./SiteBarItem.module.css"

function SiteBarItem(props) {
    return (
        <div className={s.siteBarItem}>
            <img className={s.img} src={props.avatar} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}

export default SiteBarItem;