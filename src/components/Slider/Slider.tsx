import Button from "../ui/Button/Button";
import styles from "./Slider.module.css";
import Image from "next/image";

console.log(styles)

export default function Slider() {
    return (
        <div className={styles.slider}>
            <div className={styles.sliderControls}>
                <div className={styles.sliderControlsItem} />
                <div className={styles.sliderControlsItem} />
            </div>
            <div className={styles.sliderInner}>
                <div className={styles.sliderContentFrame} style={{ backgroundImage:  "url('/img/slider-image_1.jpg')"}}>
                    {/*<Image src="/img/slider-image_1.jpg" width="100" height="100" />*/}
                </div>
                <div className={styles.sliderContent}>
                    <div className={styles.sliderContentGame}>Call of Duty: Black Ops</div>
                    <h1 className={styles.sliderContentTitle}>ЧТО ТАКОЕ CALL OF DUTY: ONLINE?</h1>
                    <p className={styles.sliderContentDescription}>Небольшая статья о малоизвестной части Call Of Duty с большим потенциалом</p>
                    <Button text="ЧИТАТЬ" />
                </div>
            </div>
        </div>
    )
}