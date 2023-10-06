import { Routes,Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Home1 } from './components/Home1';
import { Home2 } from './components/Home2';
import { Home3 } from './components/Home3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home1' element={<Home1/>}/>
      <Route path='/home2' element={<Home2/>}/>
      <Route path='/home3' element={<Home3/>}/>
    </Routes>
    </>
  );
}

export default App;
