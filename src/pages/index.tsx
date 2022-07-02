import Layout from "@layouts/Layout/Layout";
import Slider from "@features/Slider/Slider";
import NewsList from "@layouts/News/NewsList";
import Input from "@components/Input/Input";
import { useState } from "react";

const Home = () => {
    const [value, setValue] = useState("");

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Layout>
            <Input name="test" value={value} onChange={handleChange} />
            {/* <Slider /> */}
            {/* <NewsList /> */}
        </Layout>
    );
};

export default Home;
