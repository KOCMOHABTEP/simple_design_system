import styles from "./Sidebar.module.css";
import Link from "next/link";

console.log(styles);


export const Sidebar = () => {
    
    const menuItems = [
        "Команда",
        "Сообщения",
        "Матчи",
        "Турниры",
        "Стримы",
        "Форум",
        "Мувики",
        "Картинки"
    ];
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner} />
            </div>
            {
                menuItems.map((item, index) =>
                    <Link href="/" key={index}>
                        <div className={styles.item}>
                            {item}
                        </div>
                    </Link>
                )
            }
        </div>

    )
}
