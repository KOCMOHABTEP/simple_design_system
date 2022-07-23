import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
}

export default function Button({ text }: ButtonProps) {
    return (
        <button type="button" className={styles.button}>
            {text}
        </button>
    );
}
