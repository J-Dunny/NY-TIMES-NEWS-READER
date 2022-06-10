import { useEffect, useState } from 'react'
import './ArticleCard.css'

const ArticleCard = ({article}) => {
    const image = article.multimedia ? <img src={article.multimedia[0].url} /> : <h1>No Image</h1>
    return (
        <article className='article-card'>
            <h1>{article.title}</h1>
            {image}
        </article>
    )
}

export default ArticleCard