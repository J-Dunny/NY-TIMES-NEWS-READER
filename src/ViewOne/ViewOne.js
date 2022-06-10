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
            <h2>{oneArticle.abstract}</h2>
        </section>
    )
}

export default ViewOne