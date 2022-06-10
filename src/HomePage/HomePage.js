import { useEffect, useState } from 'react'
import './HomePage.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const HomePage = (props) => {

    if (props.allArticles){
        const titles = props.allArticles.map(article => <ArticleCard article={article} key={article.title}/>)
        return (
            <section className='homepage'>
                <h1>HOMEPAGE</h1>
                <section className='all-articles'>
                {titles}
                </section>
            </section>
        )
    }
    
}

export default HomePage