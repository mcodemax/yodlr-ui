import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/register'>Register</Link>
          <Link to='/Admin'>Admin</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users/:id' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
