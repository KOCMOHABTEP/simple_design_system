import Icon from "@components/Icon/Icon";
import ActiveLink from "@components/ActiveLink/ActiveLink";
import { ICON_NAME } from "@components/Icon/Icon.library";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
    title: string;
    href: string;
    icon: ICON_NAME;
    props?: {
        exact?: boolean;
        passHref?: boolean;
    };
}

export const SidebarItem = ({ href, title, icon, props }: SidebarItemProps) => {
    return (
        <ActiveLink href={href} activeClassName={styles.itemActive} {...props}>
            <a className={styles.item}>
                <div className={styles.itemContainer}>
                    <Icon name={icon} className={styles.itemIcon} />
                    <span className={styles.itemText}>{title}</span>
                </div>
            </a>
        </ActiveLink>
    );
};
