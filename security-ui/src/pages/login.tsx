import Layout from "../components/layout";
import {LoginForm} from "../components/forms/login-form";

export const LoginPage = () => {
    return (
        <Layout children={<LoginForm/>}/>
    );
};
