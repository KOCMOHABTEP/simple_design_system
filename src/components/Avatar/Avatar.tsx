import cn from "classnames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    image?: string;
    name?: string;
    size: "xs";
}

const Avatar = ({ image, name, size }: AvatarProps) => {
    const AvatarName = () => {
        const initials = name;

        return (
            <div className={styles.name}>
                <div
                    className={cn(styles.nameCharacters, {
                        [styles.nameCharactersXS]: size === "xs",
                    })}
                >
                    SD
                </div>
            </div>
        );
    };

    return (
        <div
            className={cn(styles.avatar, {
                [styles.avatarXS]: size === "xs",
            })}
        >
            {image && (
                <img className={styles.avatarImage} src={image} alt="avatar" />
            )}
            <AvatarName />
        </div>
    );
};

export default Avatar;
