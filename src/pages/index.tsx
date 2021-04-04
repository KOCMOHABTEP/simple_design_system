import Head from 'next/head'
import Layout from "@components/Layout/Layout";
import Slider from "@components/Slider/Slider";

export default function Home() {
    return (
        <div className="container">

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Slider />
            </Layout>
        </div>
    )
};