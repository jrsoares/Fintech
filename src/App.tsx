import './Style.css'
import {DataContentProvider} from "./context/DataContext.tsx";
import Header from "./components/Header.tsx";
import Resumo from "./pages/resume.tsx";
function App() {
  return (
      <DataContentProvider>
        <Header/>
          <Resumo/>
      </DataContentProvider>
  )
}

export default App
