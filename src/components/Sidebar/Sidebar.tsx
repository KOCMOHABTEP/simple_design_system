import styles from "./Sidebar.module.css";
import Link from "next/link";

console.log(styles);


export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Link href="/">
                <div className={styles.item}>
                    Главная
                </div>
            </Link>
            <Link href="/deals">
                <div className={styles.item}>
                    Сделки
                </div>
            </Link>
            <div className={styles.item}>Удобные выплаты</div>
            <div className={styles.item}>Для клиентов</div>
            <div className={styles.item}>Моя мотивация</div>
            <div className={styles.item}>Обучение</div>
            <div className={styles.item}>Новости</div>
            <div className={styles.item}>Поддержка</div>
        </div>
    )
}