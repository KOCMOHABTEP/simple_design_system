import styles from "./Icon.module.css";

interface IIconProperties {
    icon: string;
    width?: number;
    height?: number;
    game?: boolean;
}

export default function Icon(props:IIconProperties) {
    const {width = 24, height = 24, game} = props;
    let url = "/icons/sprite.svg";
    if (game) url = "/icons/games.svg";
    
    return (
        <svg viewBox='0 0 16 16' className={styles.icon} width={width} height={height}>
            <use xlinkHref={`${url}#${props.icon}`} />
        </svg>
    )
}