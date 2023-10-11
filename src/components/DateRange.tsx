import React from "react";
import DateInput from "./DateInput";
import { useData } from "../context/DataContext.tsx";

const DateRange = () => {
  const { data, inicio, setInicio, final, setFinal } = useData();
  console.log(data);
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DateRange;
