import IconArrowUp from "./icons/arrow_up.svg";
import IconArrowRight from "./icons/arrow_right.svg";
import IconArrowDown from "./icons/arrow_down.svg";
import IconArrowLeft from "./icons/arrow_left.svg";
import IconChat from "./icons/chat.svg";
import IconError from "./icons/error.svg";
import IconFriends from "./icons/friends.svg";
import IconGameBlackOps from "./icons/game-blackops.svg";
import IconGroups from "./icons/groups.svg";
import IconHome from "./icons/home.svg";
import IconLike from "./icons/like.svg";
import IconMatches from "./icons/matches.svg";
import IconMedia from "./icons/media.svg";
import IconNews from "./icons/news.svg";
import IconNotification from "./icons/notification.svg";
import IconStreams from "./icons/streams.svg";
import IconTeam from "./icons/team.svg";
import IconViews from "./icons/views.svg";
import IconSteam from "./icons/socials-steam.svg";
import IconTimer from "./icons/timer.svg";

export type ICON_NAME = keyof typeof ICON_LIBRARY;

export const ICON_LIBRARY = {
    "arrow_up": (props: any) => <IconArrowUp {...props} />,
    "arrow_right": (props: any) => <IconArrowRight {...props} />,
    "arrow_down": (props: any) => <IconArrowDown {...props} />,
    "arrow_left": (props: any) => <IconArrowLeft {...props} />,
    "comments": (props: any) => <IconChat {...props} />,
    "error": (props: any) => <IconError {...props} />,
    "friends": (props: any) => <IconFriends {...props} />,
    "game-blackops": (props: any) => <IconGameBlackOps {...props} />,
    "groups": (props: any) => <IconGroups {...props} />,
    "home": (props: any) => <IconHome {...props} />,
    "like": (props: any) => <IconLike {...props} />,
    "matches": (props: any) => <IconMatches {...props} />,
    "media": (props: any) => <IconMedia {...props} />,
    "news": (props: any) => <IconNews {...props} />,
    "notification": (props: any) => <IconNotification {...props} />,
    "streams": (props: any) => <IconStreams {...props} />,
    "team": (props: any) => <IconTeam {...props} />,
    "views": (props: any) => <IconViews {...props} />,
    "social-steam": (props: any) => <IconSteam {...props} />,
    "timer": (props: any) => <IconTimer {...props} />,
}