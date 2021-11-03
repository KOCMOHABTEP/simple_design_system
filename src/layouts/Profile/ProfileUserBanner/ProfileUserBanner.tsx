import styles from "./ProfileUserBanner.module.css";

const ProfileUserBanner = () => {
    
    
    return (
        <div className={styles.banner}>
            
            <div className={styles.bannerUser}>
                <div className={styles.bannerUserAvatar}>
                    <img src="#"/>
                </div>
                <div className={styles.bannerUserLevel}>34</div>
            </div>
            
            <div className={styles.bannerFooter}></div>
        </div>
    )
}

export default ProfileUserBanner;