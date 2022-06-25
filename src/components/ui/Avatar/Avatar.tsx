import cn from "classnames";
import styles from "./Avatar.module.css";

interface AvatarProps {
    level: number;

    size?: "large";
    image?: string;
}

const Avatar = ({ level, size, image }: AvatarProps) => {
    const img = image || "/img/avatar_invader.jpg";

    const avatarClassName = cn(styles.avatar, {
        [styles.avatarLarge]: size === "large",
    });

    return (
        <div className={avatarClassName}>
            <div className={styles.avatarLevel}>{level}</div>
            <div className={styles.avatarImage}>
                <img src={img} alt="avatar" />
            </div>
        </div>
    );
};

export default Avatar;
