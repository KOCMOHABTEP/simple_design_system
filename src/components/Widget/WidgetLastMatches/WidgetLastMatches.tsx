import {Widget} from "@components/Widget/Widget";
import styles from "./WidgetLastMatches.module.css";
import Icon from "@components/ui/Icon/Icon";
import Avatar from "@components/ui/Avatar/Avatar";

export const WidgetLastMatches = () => {
    return (
        <Widget title={"Последние матчи"}>
            <div className={styles.match}>
                <div className={styles.matchHead}>
                    <div className={styles.matchHeadDate}>22 Ноя 2021 : 19:30</div>
                    <div className={styles.matchHeadResults}>
                        <Icon name={"timer"} size={16} className={styles.matchHeadResultsIcon} />
                        <span>39 Мин</span>
                        <span>—</span>
                        <div className={styles.matchHeadResultsStatus}>ПОБЕДА</div>
                    </div>
                </div>
                <div className={styles.matchBody}>
                    <div className={styles.matchBodyResult}>
                        <div className={styles.player}>
                            <Avatar level={0} />
                            <div className={styles.playerInfo}>
                                <div className={styles.playerInfoNickname}>KOCMOHABT</div>
                                <div className={styles.playerInfoNickname}>Уровень 12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Widget>
    )
}