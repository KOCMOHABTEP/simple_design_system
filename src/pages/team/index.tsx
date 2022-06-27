import Layout from "@layouts/Layout/Layout";
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
