import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  const [page, setPage] = useState('about')
  return (
    <div className="App">
      <Header setPage={setPage}/> 
      {page == 'about' && <About></About>} 
      {page == 'contact' && <Contact></Contact>} 
      {page == 'portfolio' && <Portfolio></Portfolio>} 
    </div>
  );
}

export default App;
