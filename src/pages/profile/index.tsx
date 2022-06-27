import Layout from "@layouts/Layout/Layout";
import ProfileUserBanner from "@layouts/Profile/ProfileUserBanner/ProfileUserBanner";
import { Widget } from "@features/Widget/Widget";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import Achievements from "@features/Achievements/Achievements";

const Profile = () => {
    return (
        <Layout>
            <ProfileUserBanner />
            <Achievements />
            <Widget title="Опачки" />
            <WidgetLastMatches />
        </Layout>
    );
};

export default Profile;
