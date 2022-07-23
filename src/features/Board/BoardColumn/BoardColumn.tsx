import { ReactNode } from "react";
import styles from "./BoardColumn.module.scss";

interface BoardColumnProps {
    name: string;
    children?: ReactNode;
}

const BoardColumn = ({ name, children }: BoardColumnProps) => {
    return (
        <div className={styles.component}>
            <div className={styles.header}>
                <div className={styles.headerName}>{name}</div>
                <div className={styles.headerActions}>
                    <div className={styles.headerActionsItem} />
                </div>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default BoardColumn;
