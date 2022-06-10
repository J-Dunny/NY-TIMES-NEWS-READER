import { useEffect, useState } from 'react'
import './ArticleCard.css'

const ArticleCard = ({article}) => {
    const image = article.multimedia ? <img src={article.multimedia[0].url} /> : <h1>No Image</h1>

    if(article.title){
        return (
            <article className='article-card'>
                <h2>{article.title}</h2>
                {image}
            </article>
        )
    }
    
}

export default ArticleCard