import Layout from "./layout";
import {AuthSwitcher} from "../components/auth-switcher";

export function Home() {
    return (
        <Layout>
            <div className='h-full  '>
                <div className='flex items-center justify-center mb-20'>
                    <p className='text-7xl font-extrabold pl-2 italic text-amber-200 '>Auth Demo.</p>
                </div>
                <AuthSwitcher/>
            </div>
        </Layout>
    );
}
