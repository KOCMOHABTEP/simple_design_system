import styles from "./TeamBanner.module.css";


const TeamBanner = () => {

    return (
        <div className={styles.banner}>

            <div>
                <div className={styles.bannerBodyImage}>
                    <img className={styles.bannerBodyImageImg} src="/img/wallpaper-space.jpg" />
                </div>
                <div className={styles.bannerBodyUser}>
                    <div className={styles.bannerBodyUserInfo}>
                        <div className={styles.userName}>Название команды</div>
                    </div>
                </div>
            </div>

            <div className={styles.bannerFooter}></div>
        </div>
    )
}

export default TeamBanner;