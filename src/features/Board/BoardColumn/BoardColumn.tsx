import { ReactNode } from "react";
import styles from "./BoardColumn.module.scss";

interface BoardColumnProps {
    name: string;
    count?: number;
    children?: ReactNode;
}

const BoardColumn = ({ name, count = 0, children }: BoardColumnProps) => {
    return (
        <div className={styles.component}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <div className={styles.headerTitleName}>{name}</div>
                    <div className={styles.headerTitleCount}>{count}</div>
                </div>
                <div className={styles.headerActions}>
                    <div className={styles.headerActionsItem} />
                </div>
            </div>
            <div className={styles.list}>{children}</div>
        </div>
    );
};

export default BoardColumn;
