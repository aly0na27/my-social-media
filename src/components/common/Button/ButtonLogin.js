import styles from "./ButtonLogin.module.css"
const ButtonLogin = (props) => {
    return (
        <button className={styles.customBtn}>
            <span>
                Login
            </span>
        </button>
    )
}

export default ButtonLogin;