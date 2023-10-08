import "./Style.css";
import { DataContentProvider } from "./context/DataContext.tsx";
import Header from "./components/Header.tsx";
import Resumo from "./pages/resume.tsx";
function App() {
  return (
    <div className={"container"}>
      <DataContentProvider>
        <Header />
        <Resumo />
      </DataContentProvider>
    </div>
  );
}

export default App;
