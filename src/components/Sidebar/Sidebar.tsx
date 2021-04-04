import ActiveLink from "@components/ui/ActiveLink/ActiveLink";
import Icon from "@components/ui/Icon/Icon";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner} />
            </div>
            <ActiveLink href="/" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="home" width={24} height={24}/>
                    <span className={styles.itemText}>Главная</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/news" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="news"/>
                    <span className={styles.itemText}>Новости</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/team" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="team"/>
                    <span className={styles.itemText}>Команда</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/matches" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="matches"/>
                    <span className={styles.itemText}>Матчи</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/streams" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="streams"/>
                    <span className={styles.itemText}>Стримы</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/groups" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="groups"/>
                    <span className={styles.itemText}>Группы</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/media" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon icon="media"/>
                    <span className={styles.itemText}>Медиа</span>
                </div>
            </ActiveLink>
        </div>

    )
}
