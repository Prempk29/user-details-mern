// import { Create } from '@mui/icons-material';
import './App.css';
import Navbar from "./components/Navbar";
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path ="/" element={<Create/>} />
        <Route exact path ="/all" element={<Read/>} />
        <Route exact path ="/:id" element={<Update/>} />
      </Routes>
  
      </BrowserRouter>
     
    </div>
  );
}

export default App;
