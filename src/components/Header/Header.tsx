import Link from "next/link";
import styles from "./Header.module.css";

console.log(styles);

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.menu}></div>
        </div>
    )
}