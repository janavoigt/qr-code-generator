import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className = "", ...props} : ButtonProps){
    return(
        <button className={`${className}`} {...props}>
            {children}
        </button>
    )
}