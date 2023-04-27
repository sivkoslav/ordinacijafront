import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import MiniNavbar from './navbar/MiniNavbar';
import Zakazivanje from './pages/Zakazivanje';
import Cenovnik from './pages/Cenovnik';
import Footer from './navbar/Footer';


function App() {
  return (
    <div className="App">
        <Router>
          <MiniNavbar />
          <Routes>
            

            <Route exact path="/" element={<Home />} />
            <Route exact path="/Zakazivanje" element={<Zakazivanje />} />
            <Route exact path="/Cenovnik" element={<Cenovnik />} />
            


          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
