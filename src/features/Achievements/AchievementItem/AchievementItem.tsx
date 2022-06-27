import Icon from "@components/Icon/Icon";
import { ICON_NAME } from "@components/Icon/Icon.library";
import styles from "./AchievementItem.module.scss";

interface AchievementItemProps {
    description: string;
    stats: number | string;
    icon: ICON_NAME;
}

const AchievementItem = ({
    description,
    stats,
    icon,
}: AchievementItemProps) => {
    return (
        <div className={styles.component}>
            <div className={styles.icon}>
                <Icon size={48} name={icon} />
            </div>
            <div className={styles.content}>
                <div className={styles.stats}>{stats}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

export default AchievementItem;
