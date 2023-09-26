import {Input} from "../ui/input";
import {Button} from "../ui/button";

export const LoginForm = () => {
    return (
        <div className='flex items-center justify-center '>
            <form>
                <Input type='text' placeholder='E-Mail'/>
                <Input type='password' placeholder='Password'/>
                <div className='flex items-center justify-center'>
                    <Button text='Login'/>
                </div>
            </form>
        </div>
    );
};
