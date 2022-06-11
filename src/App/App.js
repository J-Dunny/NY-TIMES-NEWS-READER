import getArticles from '../apiCalls';
import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import ViewOne from '../ViewOne/ViewOne';
import Nav from '../Nav/Nav';
function App() {
const [allArticles, setAllArticles] = useState([])

useEffect(() => {
getArticles().then(data => setAllArticles(data.results))
}, [])

  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage allArticles={allArticles} />}/>
        <Route path='/:uri' element={<ViewOne allArticles={allArticles}/>} />
      </Routes>
    </div>
  );
}

export default App;
