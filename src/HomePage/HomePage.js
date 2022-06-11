import './HomePage.css'
import ArticleCard from '../ArticleCard/ArticleCard'
import { useState } from 'react'

const HomePage = (props) => {
const [search, setSearch] = useState('')

    if (props.allArticles){
        const filtered = props.allArticles.filter(article => article.title.toLowerCase().includes(search.toLocaleLowerCase()))
        const articles = filtered.map(article => <ArticleCard article={article} key={article.title}/>)
        
        return (
            <section className='homepage'>
                <input 
                type='text' 
                className='search'
                value={search}
                placeholder='Search'
                onChange={e => setSearch(e.target.value)}
                />
                <section className='all-articles'>
                {articles}
                </section>
            </section>
        )
    }
    
}

export default HomePage