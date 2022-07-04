import ApplicationsSidebarItem from "@layouts/ApplicationsSidebar/ApplicationsSidebarItem/ApplicationsSidebarItem";
import styles from "./ApplicationsSidebar.module.scss";

const ApplicationsSidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.empty}>
                <div className={styles.emptyBox} />
            </div>
            <div className={styles.inner}>
                <ApplicationsSidebarItem />
                <ApplicationsSidebarItem />
            </div>
        </div>
    );
};

export default ApplicationsSidebar;
