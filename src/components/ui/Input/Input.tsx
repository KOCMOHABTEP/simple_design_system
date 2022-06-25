import styles from './Input.module.css'
import cn from "classnames";
import Icon from "@components/ui/Icon/Icon";

interface InputProps {
    value: string
    onChange: any
    required?: boolean
    error?: {
        valid: boolean;
        message: string;
    }
}

const Input = (props: InputProps) => {

    const {value, required, onChange, error} =props;

    const placeholderClassName = cn(
        [
            styles.inputPlaceholder,
            value.length && styles.inputPlaceholderModified
        ]
    )

    return (
        <label className={styles.inputWrapper}>
            <div className={placeholderClassName}>
                { required && <span className={styles.inputPlaceholderRequired}>* </span> }
                Номер договора
            </div>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={onChange}
                required={required}
            />
            {
                error && (
                    <div className={styles.inputError}>
                        <Icon name='error' size={16} className={styles.inputErrorIcon} />
                        <div className={styles.inputErrorMessage}>
                            {error?.message}
                        </div>
                    </div>
                )
            }

        </label>
    )
}

export default Input;