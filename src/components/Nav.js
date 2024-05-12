
import { Link } from 'react-router-dom';
function Nav(){
    return(
            <nav className={`nav nav-bar`}>
                <a href="/" className='nav nav-image'>
                    <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png"  height="60" width="200" alt="little lemon" /> 
                </a>
                <ul className={`nav-button `}>
                    <li className='nav nav-l'>
                       <Link to="/home" className='nav-a'>Home</Link>
                    </li>
                    <li className='nav nav-l'>
                        <Link to="/reservation" className='nav-a'>Reservation</Link>
                    </li>
                    <li className='nav nav-l'>
                        <a href="/" className='nav-a'>Menu</a>
                    </li>
                    <li className='nav nav-l'>
                        <a href="/" className='nav-a' >Order Online</a>
                    </li>
                    <li className='nav nav-l'>
                        <a href='/' className='nav-a' >Login</a>
                    </li>
                    <li className='nav nav-l'>
                        <a href="/" className='nav-a' >About</a>
                    </li>
                </ul>
             </nav>
    )
}
export default Nav;