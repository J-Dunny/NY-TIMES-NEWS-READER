import getArticles from '../apiCalls';
import './App.css';
import { useEffect, useState } from 'react'
function App() {

useEffect(() => {
getArticles().then(data => console.log(data))
}, [])

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default App;
