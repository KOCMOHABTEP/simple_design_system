import cn from "classnames";
import styles from "./Avatar.module.css";

interface AvatarProps {
    level?: number;
    size?: "large";
    image?: string;
}

const Avatar = ({
    level,
    size,
    image = "/img/avatar_invader.jpg",
}: AvatarProps) => {
    const avatarClassName = cn(styles.avatar, {
        [styles.avatarLarge]: size === "large",
    });

    return (
        <div className={avatarClassName}>
            {level && <div className={styles.avatarLevel}>{level}</div>}
            <div className={styles.avatarImage}>
                <img src={image} alt="avatar" />
            </div>
        </div>
    );
};

export default Avatar;
