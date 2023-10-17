import styles from "./Paginator.module.css";
import React from "react";

function Paginator(props) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pages}>
            {
                pages.map((el) => {
                    return <span key={el} onClick={() => props.onChangePageUsers(el)}
                                 className={props.pageSelected === el ? styles.pageSelected : undefined}>{el}</span>
                })
            }
        </div>
    )
}

export default Paginator;