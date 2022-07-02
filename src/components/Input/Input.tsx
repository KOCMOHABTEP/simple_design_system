import cn from "classnames";
import Icon from "@components/Icon/Icon";
import { ICON_NAME } from "@components/Icon/Icon.library";
import { ChangeEvent, useState } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    name: string;
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    icon?: ICON_NAME;
    hint?: string;
    disabled?: boolean;
    required?: boolean;
    error?: {
        valid: boolean;
        message: string;
    };
}

const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const {
        name,
        value,
        placeholder,
        required,
        onChange,
        hint,
        error,
        disabled,
    } = props;

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const placeholderIsModified = isFocused || value.length;

    console.log(styles);

    return (
        <label className={styles.label} htmlFor={name}>
            {hint && (
                <div className={styles.hint}>
                    <Icon name="hint" size={16} className={styles.hintIcon} />
                    <div className={styles.hintMessage}>{hint}</div>
                </div>
            )}
            {placeholder && (
                <div
                    className={cn(styles.placeholder, {
                        [styles.placeholderModified]: placeholderIsModified,
                    })}
                >
                    {required && (
                        <span className={styles.placeholderRequired}>* </span>
                    )}
                    {placeholder}
                </div>
            )}
            <input
                className={cn(styles.input, {
                    [styles.inputDisabled]: disabled,
                    [styles.inputError]: error,
                })}
                type="text"
                name={name}
                value={value}
                required={required}
                disabled={disabled}
                onChange={event => onChange(event)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {error && (
                <div className={styles.error}>
                    <Icon name="error" size={16} className={styles.errorIcon} />
                    <div className={styles.errorMessage}>{error?.message}</div>
                </div>
            )}
        </label>
    );
};

export default Input;
