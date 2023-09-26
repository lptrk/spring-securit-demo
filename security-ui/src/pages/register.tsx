import Layout from "../components/layout";
import {RegisterForm} from "../components/forms/register-form";

export const RegisterPage = () => {
    return (
        <Layout children={<RegisterForm/>}/>
    );
};
