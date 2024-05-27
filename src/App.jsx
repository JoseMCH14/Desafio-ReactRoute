import { Navegacion } from './components/Navigations' 
import { Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from './views/Home';

function App() {

  return (
    <div>
      <Navegacion />
      <Routes>
          <Route 
           path='/'
           element={<HomeView />}
          />
      </Routes>
    </div>

  )
}

export default App
