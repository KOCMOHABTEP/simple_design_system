import ActiveLink from "@components/ui/ActiveLink/ActiveLink";
import Icon from "@components/ui/Icon/Icon";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner} />
            </div>
            <ActiveLink href="/" activeClassName={styles.active} exact>
                <div className={styles.item}>
                    <Icon name="home" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Главная</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/news" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon name="news" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Новости</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/team" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon name="team" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Команда</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/matches" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon name="matches" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Матчи</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/streams" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon name="streams" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Стримы</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/groups" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon name="groups" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Группы</span>
                </div>
            </ActiveLink>
            <ActiveLink href="/media" activeClassName={styles.active}>
                <div className={styles.item}>
                    <Icon name="media" className={styles.itemIcon}/>
                    <span className={styles.itemText}>Медиа</span>
                </div>
            </ActiveLink>
        </div>

    )
}
