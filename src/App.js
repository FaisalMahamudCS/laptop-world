import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route> 
       <Route path='/blog' ></Route>
      </Routes>
    </div>
  );
}

export default App;
