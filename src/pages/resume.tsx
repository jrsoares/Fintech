import {useData} from "../context/DataContext.tsx";

const Resumo = () => {
    const { data} = useData()
    console.log(data)
    return (
    <div>
      <h1>Resumo</h1>
    </div>
  );
}

export default Resumo;