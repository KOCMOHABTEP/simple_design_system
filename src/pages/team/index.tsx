import Layout from "@layouts/Layout/Layout";
import ProfileUserBanner from "@layouts/Profile/ProfileUserBanner/ProfileUserBanner";
import { Widget } from "@features/Widget/Widget";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import TeamBanner from "@layouts/Team/TeamBanner/TeamBanner";

const Team = () => {
    return (
        <Layout>
            <TeamBanner />
            <div>
                <div>Статистика</div>
                <div>состав</div>
                <div>последние матчи</div>
            </div>
        </Layout>
    );
};

export default Team;
