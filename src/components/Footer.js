import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer-d">
            <div className="line">
                <div className="black"></div>
                <div className="green"></div>
            </div>
            <div className="footer-pic">
                <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png"  height="60" width="200" alt="little lemon" />
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            </div>
            <ul className="footer-links">
                <h3>Navigation</h3>
                <li className="footer-l">
                    <Link to="/home">Home</Link>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a">Reservation</a>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a">About</a>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a" >Menu</a>
                </li>
                <li className="footer-l">
                    <a href="/"className="footer-a" >Order Online </a>
                </li>
                <li className="footer-l">
                    <a href="/"className="footer-a" >login</a>
                </li>
            </ul>
            <ul className="footer-contacts">
                <h3>Contacts</h3>
                <li className="footer-l">
                    <a href="/" className="footer-a">Phone Number</a>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a">Email</a>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a">Address</a>
                </li>
            </ul>
             <ul className="footer-media">
                <h3>Social Media</h3>
                <li className="footer-l">
                    <a href="/" className="footer-a">Facebook</a>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a">Instagram</a>
                </li>
                <li className="footer-l">
                    <a href="/" className="footer-a">Tiktok</a>
                </li>
            </ul>

        </div>
    )
}
export default Footer;