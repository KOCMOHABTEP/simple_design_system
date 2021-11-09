import styles from "./Avatar.module.css";
import cn from "classnames";

interface AvatarProps {
    level: number;
    
    size? : "large"
    image?: string
}

const Avatar = ({level, size, image} : AvatarProps) => {
    
    const img = image || "/img/avatar_invader.jpg";
    
    const avatarClassName = cn(styles.avatar, {
        [styles.avatarLarge] : size === "large"
    })
    
    return (
        <div className={avatarClassName}>
            <div className={styles.avatarLevel}>{level}</div>
            <div className={styles.avatarImage} >
                <img src={img} />
            </div>
        </div>
    )
}

export default Avatar;