import Link from "next/link";
import styles from "./Header.module.css";

console.log(styles);

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                
                <div className={styles.profile}>
                    <a href="#" className={styles.profileImage} />
                </div>
            </div>
        </div>
    )
}