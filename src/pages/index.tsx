import Layout from "@components/Layout/Layout";
import Slider from "@components/Slider/Slider";
import {NewsList} from "@components/News/NewsList";

export default function Home() {
    return (
        <Layout>
            <Slider />
            <NewsList />
        </Layout>
    )
};