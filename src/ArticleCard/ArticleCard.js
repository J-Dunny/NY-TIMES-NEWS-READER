import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({article}) => {
    const image = article.multimedia ? <img src={article.multimedia[0].url} /> : <h1>No Image</h1>
   
    if(article.title){
        return (
            <article className='article-card'>
                <Link to={article.uri.split('/')[3]}>
                <h2>{article.title}</h2>
                </Link>
                {image}
            </article>
        )
    }
    
}

export default ArticleCard