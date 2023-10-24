import styles from "./FormsControllers.module.css"


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}
                      className={styles.textarea + ' ' + styles.formControl + ' ' + ((meta.error && meta.touched) ? styles.error : '')}/>
            {
                (meta.error && meta.touched) ? <div><span className={styles.validateForm}>{meta.error}</span></div> : <></>
            }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props} className={styles.input + ' ' + styles.formControl + ' ' + ((meta.error && meta.touched) ? styles.error : '')}/>
            {
                (meta.error && meta.touched) ? <div><span className={styles.validateForm}>{meta.error}</span></div> : <></>
            }
        </div>
    )
}

