import styles from "./Button.module.css";

export default function Button(props) {
    console.log(props);
    return (
        <button className={styles.button}>{props?.text}</button>
    )
}