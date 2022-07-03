import cn from "classnames";
import Icon from "@components/Icon/Icon";
import { ICON_NAME } from "@components/Icon/Icon.library";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    id: string;
    value?: string;
    label?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const { id, value, label, required, onChange, hint, error, disabled } =
        props;

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const labelModified = isFocused || inputRef.current?.value || value?.length;

    return (
        <label className={styles.container} htmlFor={id}>
            {hint && (
                <span className={styles.hint}>
                    <Icon name="hint" size={16} className={styles.hintIcon} />
                    <div className={styles.hintMessage}>{hint}</div>
                </span>
            )}
            {label && (
                <span
                    className={cn(styles.label, {
                        [styles.labelModified]: labelModified,
                    })}
                >
                    {label}
                    {required && (
                        <span className={styles.labelRequired}> *</span>
                    )}
                </span>
            )}
            <input
                ref={inputRef}
                className={cn(styles.input, {
                    [styles.inputDisabled]: disabled,
                    [styles.inputError]: error,
                })}
                type="text"
                name={id}
                value={value}
                required={required}
                disabled={disabled}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {error && (
                <span className={styles.error}>
                    <Icon name="error" size={16} className={styles.errorIcon} />
                    <div className={styles.errorMessage}>{error?.message}</div>
                </span>
            )}
        </label>
    );
};

export default Input;
