import styles from "./Paginator.module.css";
import React, {useState} from "react";

function Paginator({totalItemsCount, pageSize, pageSelected, onChangePageUsers, portionSize}) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(Math.ceil(pageSelected / portionSize));
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    console.log(portionNumber)

    console.log(`render ${portionNumber}`)
    return (
        <div>
            {
                portionNumber !== 1 ? <button onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</button> : undefined
            }
            <div>
                {
                    pages
                        .filter(p => leftPortionPageNumber <= p && p <= rightPortionPageNumber)
                        .map((el)  => {
                            return <span key={el}
                                         onClick={() => onChangePageUsers(el)}
                                         className={pageSelected === el ? styles.pageSelected : undefined}
                            > { el } </span>
                        })
                }
            </div>
            {
                portionNumber < portionCount ? <button onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button> : undefined
            }
        </div>
    )
    // return (
    //     <div className={styles.pages}>
    //         {
    //             pages.map((el) => {
    //                 return <span key={el} onClick={() => onChangePageUsers(el)}
    //                              className={pageSelected === el ? styles.pageSelected : undefined}>{el}</span>
    //             })
    //         }
    //     </div>
    // )
}

export default Paginator;