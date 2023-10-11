import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  background: "var(--color-4)",
  borderRadius: "var(--gap)",
};
const LabelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={LabelStyle} htmlFor={label}>
        {label}
      </label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
