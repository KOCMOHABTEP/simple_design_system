import { Header } from "@layouts/Header/Header";
import { Sidebar } from "@layouts/Sidebar/Sidebar";
import { Container } from "@layouts/Container/Container";
import Head from "next/head";
import ApplicationsSidebar from "@layouts/ApplicationsSidebar/ApplicationsSidebar";

interface ILayout {
    title?: string;
    children: any;
}

const Layout = ({ title = "SDS", children }: ILayout) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter"
                />
            </Head>
            <div>
                <Header />
                <ApplicationsSidebar />
                <Sidebar />
                <Container>{children}</Container>
            </div>
        </>
    );
};

export default Layout;
