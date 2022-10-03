import logo from './logo.svg';
import './App.css';

import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<BookList />}></Route>
        <Route path='/book/:id' element={<BookList />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
