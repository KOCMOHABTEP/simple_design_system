import Layout from "@layouts/Layout/Layout";
import Input from "@components/ui/Input/Input";
import {useState} from "react";

const NewsPage = () => {

    const [userValue, setUserValue] =useState('')

    const handleInputChange = (event)=> {
        setUserValue(event.target.value)
    }

    return (
        <Layout title="AOD Zone | test">
           <Input value={userValue} onChange={handleInputChange}/>
           <Input value={userValue} onChange={handleInputChange} required={true}/>
           <Input value={userValue} onChange={handleInputChange} required={true} error={{valid: true, message: 'Описание ошибки'}}/>
           <Input value={userValue} onChange={handleInputChange} hint={"Обязательно заполните поле"}/>
           <Input value={userValue} onChange={handleInputChange} hint={"Обязательно заполните поле"} disabled={true}/>
        </Layout>
    )
}

export default NewsPage;