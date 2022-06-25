import styles from './Input.module.css'

const Input = () => {
    console.log(styles)
    return (
        <div className={styles.inputWrapper}>
            <div className={[styles.inputPlaceholder, styles.inputPlaceholderModified].join(' ')}>
                Номер договора
            </div>
            <input className={styles.input} type="text"/>
        </div>
    )
}

export default Input;