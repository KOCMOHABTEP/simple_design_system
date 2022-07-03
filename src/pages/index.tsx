import Layout from "@layouts/Layout/Layout";
import Slider from "@features/Slider/Slider";
import NewsList from "@layouts/News/NewsList";
import Input from "@components/Input/Input";
import { useState } from "react";

const Home = () => {
    return (
        <Layout>
            <Input id="first" label="Имя" />
            <Input id="second" label="Фамилия" required={true} />
            <Input id="second" label="Фамилия" disabled={true} />
            <Input
                id="third"
                label="Отчество"
                error={{ valid: false, message: "Ошибка валидации" }}
            />
            {/* <Slider /> */}
            {/* <NewsList /> */}
        </Layout>
    );
};

export default Home;
