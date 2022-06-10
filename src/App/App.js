import getArticles from '../apiCalls';
import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
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
      </Routes>
    </div>
  );
}

export default App;
