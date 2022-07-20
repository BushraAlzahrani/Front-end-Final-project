import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Consult from './components/Consult';
import JoinUs from './components/JoinUs';
import {Container} from "react-bootstrap"
import Footer from "./components/Footer";
import Inquiries from "./components/Inquiries";
import Veterinarians from "./components/Veterinarians";
import ShowVetsCards from "./components/ShowVetsCards";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Header/>
          <Routes>
            <Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/consult' element={<Consult/>}></Route>
              <Route path='/joinus' element={<JoinUs/>}></Route>
              <Route path='/inquiries' element={<Inquiries/>}></Route>
              <Route path='/vets' element={<ShowVetsCards/>}></Route>
            </Route>
          </Routes>
        </Router>
        <Footer/>
        </Container>
     
    </div>
  );
}

export default App;
