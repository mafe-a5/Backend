import { HomePage, MarcaPage, ModeloPage } from './components/pages'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="marca" element={<MarcaPage/>} />
        <Route path="modelo" element={<ModeloPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
