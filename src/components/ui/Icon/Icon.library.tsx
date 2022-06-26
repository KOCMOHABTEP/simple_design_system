import IconArrowUp from "./icons/arrow_up.svg";
import IconArrowRight from "./icons/arrow_right.svg";
import IconArrowDown from "./icons/arrow_down.svg";
import IconArrowLeft from "./icons/arrow_left.svg";
import IconChat from "./icons/chat.svg";
import IconError from "./icons/error.svg";
import IconFriends from "./icons/friends.svg";
import IconGameBlackOps from "./icons/game-blackops.svg";
import IconGroups from "./icons/groups.svg";
import IconHint from "./icons/hint.svg";
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

export const ICON_LIBRARY = {
    arrow_up: IconArrowUp,
    arrow_right: IconArrowRight,
    arrow_down: IconArrowDown,
    arrow_left: IconArrowLeft,
    comments: IconChat,
    error: IconError,
    friends: IconFriends,
    game_bo: IconGameBlackOps,
    groups: IconGroups,
    hint: IconHint,
    home: IconHome,
    like: IconLike,
    matches: IconMatches,
    media: IconMedia,
    news: IconNews,
    notification: IconNotification,
    streams: IconStreams,
    team: IconTeam,
    views: IconViews,
    social_steam: IconSteam,
    timer: IconTimer,
};

export type ICON_NAME = keyof typeof ICON_LIBRARY;
