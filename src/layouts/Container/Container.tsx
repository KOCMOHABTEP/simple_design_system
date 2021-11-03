import styles from "./Container.module.css";

export const Container = props => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <div className={styles.containerContent}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}