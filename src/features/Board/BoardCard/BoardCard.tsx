import Icon from "@components/Icon/Icon";
import Avatar from "@components/Avatar/Avatar";
import styles from "./BoardCard.module.scss";

interface BoardCardProps {
    id: string;
    description: string;
}

const BoardCard = ({ id, description }: BoardCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardDescription}>{description}</div>
            <div className={styles.cardFooter}>
                <div className={styles.cardFooterColumn}>
                    <div className={styles.cardIssueType}>
                        <Icon name="news" size={16} />
                    </div>
                    <div className={styles.cardIssuePriority}>Среднее</div>
                </div>
                <div className={styles.cardFooterColumn}>
                    <div className={styles.cardFooterId}>{id}</div>
                    <div className={styles.cardFooterAssignee}>
                        <Avatar size="xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardCard;
