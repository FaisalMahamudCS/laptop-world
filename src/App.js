import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Blog from './Component/Blog/Blog';
import Review from './Component/Review/Review';
import Header from './Component/Header/Header';
import Dashboard from './Component/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route> 
       <Route path='/blog' element={<Blog></Blog>} ></Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
