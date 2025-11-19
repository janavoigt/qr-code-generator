import { SelectHTMLAttributes } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  containerClassName?: string;
  labelFor?: string;
}

export default function Select({
  label,
  id,
  options,
  className = "",
  labelFor,
  ...props
}: SelectProps) {

    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return(
        <div className={className}>
            <label htmlFor={labelFor}>{label}</label>

            <select id={selectId} {...props}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}