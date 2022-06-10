import { useEffect, useState } from 'react'
import './HomePage.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const HomePage = (props) => {

    if (props.allArticles){
        const titles = props.allArticles.map(article => <ArticleCard article={article} key={article.title}/>)
        return (
            <section className='homepage'>
                <nav>
                    <h1>NY Times Science</h1>
                </nav>
                <section className='all-articles'>
                {titles}
                </section>
            </section>
        )
    }
    
}

export default HomePage