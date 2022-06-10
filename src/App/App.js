import getArticles from '../apiCalls';
import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import ViewOne from '../ViewOne/ViewOne';
function App() {
const [allArticles, setAllArticles] = useState([])

useEffect(() => {
getArticles().then(data => setAllArticles(data.results))
}, [])

console.log(allArticles)
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage allArticles={allArticles} />}/>
        <Route path='/:uri' element={<ViewOne/>} />
      </Routes>
    </div>
  );
}

export default App;
