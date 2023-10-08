import React from "react";
import DateInput from "./DateInput.tsx";

function DateRange() {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label={"inicio"}
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />

      <DateInput
        label={"fim"}
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
}

export default DateRange;
