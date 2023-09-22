import Layout from "../components/layout";
import {LoginButton} from "../components/login-button";
import {RegisterButton} from "../components/register-button";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <Layout>
            <div className='h-full  '>
                <div className='flex items-center justify-center mb-20'>
                    <p className='text-7xl font-extrabold pl-2 italic text-white '>Auth Demo</p>
                </div>
                <div className='w-full flex justify-between p-8'>

                    <Link to='/register'>
                        <RegisterButton/>
                    </Link>
                    <Link to='/login'>
                        <LoginButton/>
                    </Link>
                </div>
            </div>
        </Layout>

    );
}
