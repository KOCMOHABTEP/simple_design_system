import cn from "classnames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    image?: string;
    online?: boolean;
    name?: string;
}

const Avatar = ({ image, name, online }: AvatarProps) => {
    const AvatarName = () => {
        const initials = name;

        return (
            <div className={styles.name}>
                <div className={styles.nameCharacters}>SD</div>
            </div>
        );
    };

    return (
        <div className={styles.avatar}>
            {image && (
                <img className={styles.avatarImage} src={image} alt="avatar" />
            )}
            <AvatarName />
        </div>
    );
};

export default Avatar;
