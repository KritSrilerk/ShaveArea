import './App.css';
import Circle from './views/Circle';
import Square from './views/Square';
import Triangle from './views/Triangle';
import Home from './views/Home';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <h1>Southeast Asia Universcity</h1>
      <div>
        <Link to="/" style={{ padding: 10 }}>Home</Link>
        <Link to="/circle" style={{ padding: 10 }}>Circle Area</Link>
        <Link to="/square" style={{ padding: 10 }}>Square Area</Link>
        <Link to="/triangle" style={{ padding: 10 }}>Triangle Area</Link>
      </div>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/circle' element={<Circle />} />
        <Route path='/square' element={<Square />} />
        <Route path='/triangle' element={<Triangle />} />
      </Routes>
    </>
  );
}

export default App;
