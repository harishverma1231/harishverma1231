import { NavLink } from "react-router-dom"
import logo from "../../assets/artistic-logo2.png"
function Header(){
    return (
        <header className="header">
            <nav className="navigation">
                <NavLink className="nav_menus nav_menus_logo" to="/"><img className="logo img" src={logo}></img></NavLink>
                <div className="nav_menus_link">
                    <NavLink className="nav_menus" to="/shopify">Shopify</NavLink>
                    <NavLink className="nav_menus" to="/work">Work</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default Header