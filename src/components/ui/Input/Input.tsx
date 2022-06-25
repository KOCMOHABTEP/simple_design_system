import styles from './Input.module.css'
import cn from "classnames";

interface InputProps {
    value: string
    onChange: any
}

const Input = (props: InputProps) => {

    const {value, onChange} =props;

    const placeholderClassName = cn(
        [
            styles.inputPlaceholder,
            value.length && styles.inputPlaceholderModified
        ]
    )

    return (
        <div className={styles.inputWrapper}>
            <div className={placeholderClassName}>
                Номер договора
            </div>
            <input className={styles.input} type="text" value={value} onChange={onChange}/>
        </div>
    )
}

export default Input;