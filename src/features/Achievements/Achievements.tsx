import AchievementItem from "@features/Achievements/AchievementItem/AchievementItem";
import styles from "./Achievements.module.scss";

const Achievements = () => {
    return (
        <div className={styles.achievements}>
            <AchievementItem
                description="Луп из семи"
                icon="arrow_up"
                stats="50%"
            />
            <AchievementItem
                description="Луп из семи"
                icon="friends"
                stats="50%"
            />
            <AchievementItem
                description="Луп из семи"
                icon="timer"
                stats="50%"
            />
            <AchievementItem
                description="Луп из семи"
                icon="matches"
                stats="50%"
            />
            <AchievementItem
                description="Луп из семи"
                icon="groups"
                stats="50%"
            />
        </div>
    );
};

export default Achievements;
