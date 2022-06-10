import './ViewOne.css'
import { useParams } from 'react-router-dom'

const ViewOne = (props) => {
    const { uri } = useParams()

    const oneArticle = props.allArticles.find(article => article.uri.split('/')[3] === uri)
    const image = oneArticle.multimedia ? <img src={oneArticle.multimedia[0].url} /> : <h1>No Image</h1>

    return (
        <section className='view-one'>
            <h1>{oneArticle.title}</h1>
            {image}
            <p>{oneArticle.multimedia[0].caption}</p>
            <h2>{oneArticle.abstract}</h2>
            <a href={oneArticle.url}>View Full Article</a>
            <h3>Published: {oneArticle.published_date}</h3>
        </section>
    )
}

export default ViewOne