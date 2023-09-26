import {Navigator} from "./navigator";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div
            className='w-full min-h-[100vh] bg-gradient-to-tr from-[#d7108a] to-[#4d17da] flex items-center justify-center'>
            <div className='h-full  '>
               <Navigator/>
                {children}
            </div>
        </div>
    );
}
export default Layout;