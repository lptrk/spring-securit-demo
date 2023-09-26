import React from "react";

interface ButtonProps{
    text:string;

}

export const Button : React.FC<ButtonProps> = ({text}) => {
    return (
        <> <button className='
             w-20
             hover:bg-stone-400
             rounded-md
             bg-white
             bg-opacity-25
             hover:bg-opacity-30
             hover:font-bold
             text-white
             p-1
             '>
            {text}
        </button></>
    );
};
