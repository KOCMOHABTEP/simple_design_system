import styles from "./Avatar.module.css";

interface AvatarProps {
    level: number;
    
    size? : number;
    image?: string;
}

const Avatar = ({level} : AvatarProps) => {
    return (
        <div className={styles.avatar}>
            <div className={styles.avatarLevel}>{level}</div>
            <div className={styles.avatarImage} />
        </div>
    )
}

export default Avatar;