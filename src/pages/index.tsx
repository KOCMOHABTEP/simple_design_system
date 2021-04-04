import Head from 'next/head'
import Layout from "@components/Layout/Layout";
import Slider from "@components/Slider/Slider";
import News from "@components/News/News";

export default function Home() {
    return (
        <div className="container">

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Slider />
                <News />
            </Layout>
        </div>
    )
};