import cn from "classnames";
import styles from "./Icon.module.css";
import {ICON_LIBRARY, ICON_NAME} from "@components/ui/Icon/Icon.library";

interface IconProps {
    name: ICON_NAME | string,
    size? : number,
    className? : string
}

const Icon = ({name, size = 24, className} : IconProps) => {
    const props = {
        ...(size ? {width: size, height: size} : null),
        className : cn(styles.icon, className)
    }

    const resultComponent = ICON_LIBRARY[name]?.(props); 

    if (!resultComponent) return null;

    return  resultComponent;
}

export default Icon;