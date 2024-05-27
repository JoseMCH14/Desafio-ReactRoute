import { Navegacion } from "./components/Navigations"; 
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./views/Home";
import Contacto from "./views/Contacto";

function App() {

  return (
    <div>
      <Navegacion />
      <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/contact" element={<Contacto />}/>
      </Routes>
    </div>
  );
};

export default App
