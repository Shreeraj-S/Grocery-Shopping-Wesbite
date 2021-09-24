import {Link } from 'react-router-dom'
import { ReactComponent as Search } from './images/search.svg';
import './style_Sheets/Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <Link className="company-logo" to='/'></Link>
            <form className="search">
                <input type="text" placeholder="Search for Products.."/>
                <div>
                <button type="submit"><Search /></button>
                </div>
            </form>
        </nav>
    );

};

export default Navbar;