import cx from "classnames";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export const Sidebar = () => {
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner} />
            </div>
            <Link href="/" >
                <div className={cx(styles.item, styles.active)}>
                    <i className={styles.itemIcon} />
                    <span className={styles.itemText}>Команда</span>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.item}>
                    <i className={styles.itemIcon} />
                    <span className={styles.itemText}>Матчи</span>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.item}>
                    <i className={styles.itemIcon} />
                    <span className={styles.itemText}>Турниры</span>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.item}>
                    <i className={styles.itemIcon} />
                    <span className={styles.itemText}>Стримы</span>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.item}>
                    <i className={styles.itemIcon} />
                    <span className={styles.itemText}>Группы</span>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.item}>
                    <i className={styles.itemIcon} />
                    <span className={styles.itemText}>Медиа</span>
                </div>
            </Link>
        </div>

    )
}
