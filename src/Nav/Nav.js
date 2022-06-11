import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <h1>NY Times Science</h1>
            <Link to={'/'}>
                <button className='home'>Home</button>
            </Link>

        </nav>
    )
}

export default Nav