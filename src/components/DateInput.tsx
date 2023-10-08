import React, { ComponentProps } from "react";
interface IDateInputProps extends ComponentProps<"input"> {
  label: string;
}
function DateInput({ label, ...props }: IDateInputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={"date"} name={label} id={label} {...props} />
    </div>
  );
}

export default DateInput;
