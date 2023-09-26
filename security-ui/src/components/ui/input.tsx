import React from "react";

interface InputProps {
    type: string;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({type, placeholder}) => {
    return (
        <>
            <input type={type} placeholder={placeholder}
                   className='block m-2 rounded-md bg-white opacity-20 p-2 font-bold' required/>
        </>
    );
};
