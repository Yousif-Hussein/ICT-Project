
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Nav(){
    const [open,setOpen]=useState(false)
    const toggleMenu=()=>{
        setOpen((open)=> !open)
    }
    return(
            <nav className={`nav nav-bar`}>
                <a href="/" className='nav nav-image'>
                    <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png"  height="60" width="200" alt="little lemon" /> 
                </a>
                <ul className={`nav-button ${open?"isopen":""}`}>
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
                    <ul className='toggle'>
                        <li className='menu' onClick={toggleMenu}>☰</li>
                    </ul>
             </nav>
    )
}
export default Nav;