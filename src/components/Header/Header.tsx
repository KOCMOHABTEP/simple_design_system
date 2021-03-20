import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                
                {/*Меню*/}
                <div className={styles.controls}>
                    <a href="#">
                        <div className={styles.controlsItem}>
                            <Image src="/icons/icon_notification-24x24.png" width={24} height={24}  />
                        </div>        
                    </a>
                    <a href="#">
                        <div className={styles.controlsItem}>
                            <Image src="/icons/icon_messages-24x24.png" width={24} height={24}  />
                            <div className={styles.controlsActivities}>7</div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.controlsItem}>
                            <Image src="/icons/icon_members-24x24.png" width={24} height={24}  />
                            <div className={styles.controlsActivities}>1</div>
                        </div>
                    </a>
                </div>
                {/*Профиль*/}
                <div className={styles.profile}>
                    <a href="#" >
                        <div className={styles.profileLevel}>34</div>
                        <div className={styles.profileImage} />
                    </a>
                </div>
            </div>
        </div>
    )
}