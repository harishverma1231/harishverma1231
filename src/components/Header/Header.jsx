import { Link } from "react-router-dom"
import logo from "../../assets/artistic-logo2.png"
function Header(){
    return (
        <header className="header">
            <nav className="navigation">
                <Link className="nav_menus nav_menus_logo" to="/"><img className="logo img" src={logo}></img></Link>
                <div className="nav_menus_link">
                    <Link className="nav_menus" to="/shopify">Shopify</Link>
                    <Link className="nav_menus" to="/work">Work</Link>
                </div>
            </nav>
        </header>
    )
}
export default Header