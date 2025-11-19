import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  classNameLabel: string;
  labelFor: string;
}

export default function Input({label, id, classNameLabel, labelFor, ...props} : InputProps){

    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return(
        <div className={classNameLabel}>
            <label htmlFor={labelFor}>
                {label}
            </label>
            <input id={inputId} {...props} />

        </div>
    )
}