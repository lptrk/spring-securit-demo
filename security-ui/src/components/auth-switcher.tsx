import {Register} from "./register";
import {Login} from "./login";

export const AuthSwitcher = ()=>{
    return(
        <div className='flex text-cyan-50 space-x-4 justify-center items-center text-center'>
            <div>
                <Register/>
            </div>
            <div className='h-24 w-[3px] bg-white rounded-full'>

            </div>
            <div>
                <Login/>
            </div>
        </div>
    )
}