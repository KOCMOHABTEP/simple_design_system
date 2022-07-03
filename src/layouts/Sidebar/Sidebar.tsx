import { SidebarItem } from "@layouts/Sidebar/SidebarItem/SidebarItem";
import Logo from "@public/aodzone_logo.svg";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner}>Test</div>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <SidebarItem
                        title="Главная"
                        href="/"
                        icon="home"
                        props={{ exact: true, passHref: true }}
                    />
                </li>
                <li className={styles.item}>
                    <SidebarItem
                        title="Новости"
                        href="/news"
                        icon="news"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.item}>
                    <SidebarItem
                        title="Команда"
                        href="/team"
                        icon="team"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.item}>
                    <SidebarItem
                        title="Матчи"
                        href="/matches"
                        icon="matches"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.item}>
                    <SidebarItem
                        title="Стримы"
                        href="/streams"
                        icon="streams"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.item}>
                    <SidebarItem
                        title="Группы"
                        href="/groups"
                        icon="groups"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.item}>
                    <SidebarItem
                        title="Медиа"
                        href="/media"
                        icon="media"
                        props={{ passHref: true }}
                    />
                </li>
            </ul>
        </div>
    );
};
