import Head from 'next/head'
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Header} from "../components/Header/Header";

export default function Home() {
    return (
        <div className="container">

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />
            <Sidebar/>
        </div>
    )
};