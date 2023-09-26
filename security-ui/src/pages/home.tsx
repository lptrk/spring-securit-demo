import Layout from "../components/layout";
import {AuthSelector} from "../components/auth-selector";

export function Home() {
    return (
        <Layout children={<AuthSelector/>}/>
    );
}
