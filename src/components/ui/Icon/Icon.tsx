import cn from "classnames";
import styles from "./Icon.module.css";

interface IIconProperties {
    className?: string,
    icon: string;
    width?: number;
    height?: number;
    game?: boolean;
}

export default function Icon(props:IIconProperties) {
    const {width = 24, height = 24, game} = props;
    console.log(props.className);
    let url = "/icons/sprite.svg";
    if (game) url = "/icons/games.svg";
    
    return (
        <svg viewBox='0 0 16 16' className={cn(styles.icon, props.className)} width={width} height={height}>
            <use xlinkHref={`${url}#${props.icon}`} />
        </svg>
    )
}