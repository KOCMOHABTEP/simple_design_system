import Layout from "@layouts/Layout/Layout";
import Slider from "@features/Slider/Slider";
import NewsList from "@layouts/News/NewsList";
import Input from "@components/Input/Input";
import { useState } from "react";

const Home = () => {
    return (
        <Layout>
            <Input id="test" label="Тестирование" />
            {/* <Slider /> */}
            {/* <NewsList /> */}
        </Layout>
    );
};

export default Home;
