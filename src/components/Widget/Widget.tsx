import { ReactNode } from "react";
import styles from "./Widget.module.css";

interface WidgetProps {
    title: string;
    children?: ReactNode;
}

export const Widget = ({ title, children }: WidgetProps) => {
    return (
        <div className={styles.widget}>
            <div className={styles.widgetHeader}>
                <div className={styles.widgetHeaderTitle}>{title}</div>
            </div>
            <div className={styles.widgetBody}>{children}</div>
        </div>
    );
};
