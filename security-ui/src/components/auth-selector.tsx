import {Link} from "react-router-dom";
import {Button} from "./ui/button";

export const AuthSelector = () => {
    return (
        <div className='w-full flex justify-between p-8'>
            <Link to='/register' className='mx-4'>
                <Button text='Register'/>
            </Link>
            <Link to='/login'>
                <Button text='Login'/>
            </Link>
        </div>
    );
};
