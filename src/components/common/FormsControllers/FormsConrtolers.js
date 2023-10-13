import styles from "./FormsControllers.module.css"


const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formControl + ' ' + ((meta.error && meta.touched) ? styles.error : '')}>
            <div>

                <textarea {...input} {...props} className={styles.textarea}/>
            </div>
            {
                (meta.error && meta.touched) ? <span>{meta.error}</span> : <></>
            }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <>
            <div className={styles.formControl + ' ' + ((meta.error && meta.touched) ? styles.error : '')}>
                <input {...input} {...props} className={styles.input}/>
            </div>
            {
                (meta.error && meta.touched) ? <span className={styles.validateForm}>{meta.error}</span> : <></>
            }
        </>
    )
}

export default Textarea