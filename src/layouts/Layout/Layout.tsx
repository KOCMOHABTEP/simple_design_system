import {Header} from "@components/../Header/Header";
import {Sidebar} from "@components/../Sidebar/Sidebar";
import {Container} from "@components/../Container/Container";
import Head from "next/head";

interface ILayout {
    title?: string,
    children: any
}

const Layout = ({title = "AOD Zone", children}: ILayout) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <Header/>
                <Sidebar/>
                <Container>{children}</Container>
            </div>
        </>
    )
}

export default Layout;