import IconArrow from "./icons/arrow.svg";
import IconComments from "./icons/comments.svg";
import IconFriends from "./icons/friends.svg";
import IconGameBlackOps from "./icons/game-blackops.svg";
import IconGroups from "./icons/groups.svg";
import IconHome from "./icons/home.svg";
import IconMatches from "./icons/matches.svg";
import IconMedia from "./icons/media.svg";
import IconMessage from "./icons/message.svg";
import IconNews from "./icons/news.svg";
import IconNotification from "./icons/notification.svg";
import IconStreams from "./icons/streams.svg";
import IconTeam from "./icons/team.svg";
import IconViews from "./icons/views.svg";

export type ICON_NAME = keyof typeof ICON_LIBRARY;

export const ICON_LIBRARY = {
    "arrow": (props: any) => <IconArrow {...props} />,
    "comments": (props: any) => <IconComments {...props} />,
    "friends": (props: any) => <IconFriends {...props} />,
    "game-blackops": (props: any) => <IconGameBlackOps {...props} />,
    "groups": (props: any) => <IconGroups {...props} />,
    "home": (props: any) => <IconHome {...props} />,
    "matches": (props: any) => <IconMatches {...props} />,
    "media": (props: any) => <IconMedia {...props} />,
    "message": (props: any) => <IconMessage {...props} />,
    "news": (props: any) => <IconNews {...props} />,
    "notification": (props: any) => <IconNotification {...props} />,
    "streams": (props: any) => <IconStreams {...props} />,
    "team": (props: any) => <IconTeam {...props} />,
    "views": (props: any) => <IconViews {...props} />,
}