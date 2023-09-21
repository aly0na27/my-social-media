import s from "./../Navbar.module.css";
import SiteBarItem from "./SiteBarItem/SiteBarItem";

function SiteBar(props) {
    let friends = props.friends.map((el) => <SiteBarItem name={el.name} avatar={el.avatar}/> );
    return (
        <div className={s.siteBar}>
            <h2>Friends</h2>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    )
}

export default SiteBar;