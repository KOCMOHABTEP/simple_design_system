import Layout from "@layouts/Layout/Layout";
import Input from "@components/ui/Input/Input";
import {useState} from "react";

const NewsPage = () => {

    const [userValue, setUserValue] =useState('')

    const handleInputChange = (event)=> {
        const {target} = event;
        setUserValue(target.value)
    }

    return (
        <Layout title="AOD Zone | test">
           <Input value={userValue} onChange={handleInputChange}/>
           <Input value={userValue} onChange={handleInputChange} required={true}/>
           <Input value={userValue} onChange={handleInputChange} required={true} error={{valid: true, message: 'Описание ошибки'}}/>
        </Layout>
    )
}

export default NewsPage;