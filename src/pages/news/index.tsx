import Layout from "@components/Layout/Layout";
import {NewsList} from "@components/News/NewsList";

export default function News() {
    return (
        <Layout title="AOD Zone | Новости">
            <NewsList />
        </Layout>
    )
};