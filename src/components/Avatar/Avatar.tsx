import cn from "classnames";
import styles from "./Avatar.module.scss";

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
    return (
        <div
            className={cn(styles.avatar, {
                [styles.avatarLarge]: size === "large",
            })}
        >
            {level ? <div className={styles.level}>{level}</div> : null}
            <div className={styles.image}>
                <img src={image} alt="avatar" />
            </div>
        </div>
    );
};

export default Avatar;
