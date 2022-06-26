import Avatar from "@components/Avatar/Avatar";
import Icon from "@components/Icon/Icon";
import { useState } from "react";
import styles from "./UserCard.module.css";

const UserCard = () => {
    const [userSettingsIsOpened, setUserSettingsIsOpened] = useState(false);

    return (
        <div className={styles.user}>
            <div className={styles.userAvatar}>
                <Avatar />
            </div>
            <div className={styles.userContent}>
                <div className={styles.name}>KOCMOHABT</div>
                <div className={styles.level}>Уровень 32</div>
            </div>
            <div className={styles.userControl}>
                <div
                    className={styles.button}
                    onClick={() =>
                        setUserSettingsIsOpened(!userSettingsIsOpened)
                    }
                >
                    {userSettingsIsOpened ? (
                        <Icon name="arrow_up" size={16} />
                    ) : (
                        <Icon name="arrow_down" size={16} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
