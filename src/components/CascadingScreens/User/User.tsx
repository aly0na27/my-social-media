import React from 'react'
import styles from "../../Users/User/User.module.css"
import Skeleton from "@mui/material/Skeleton"

export const User: React.FC = () => {
    return (
        <div className={styles.userWrapper}>
            <Skeleton animation={"wave"} variant={"circular"} sx={{width: "7rem", height: "7rem"}}/>
            <Skeleton animation={"wave"} variant={"text"} sx={{fontSize: "1.5rem"}} width={"8rem"} height={"2rem"}/>
            <Skeleton animation={"wave"} variant={"rounded"} sx={{width: "10rem", height: "3rem", borderRadius: "1rem"}}/>
        </div>
    )
}