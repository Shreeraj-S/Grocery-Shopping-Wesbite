import {Link} from 'react-router-dom';
import './style_Sheets/NotFound.css'

function NotFound() {
    return (
        <div className="notfound">
            <h2>Error 404</h2>
            <p>We are sorry, but the The page you were looking for doesn't exist. 
                You may have mistyped the address or the page may have moved.</p>
            <p>Please click <Link to='/'>here</Link> to go back</p>
        </div>
    )
}

export default NotFound;
