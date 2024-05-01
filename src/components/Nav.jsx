import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setNavOpen(!isNavOpen);
    };

    const toggleServices = () => {
        setServicesOpen((prevServicesOpen) => !prevServicesOpen);
    };
    
    // Subheader? This same nav is used or Header File and SubHeader File (SubHeader are other pages than Home, I have use Subheader for them to display Page Name on the top of background Image)

    return (
            <nav>
                <div>
                    <Link to={"/"}><img src={require("../images/logo.jpg")}/></Link>
                </div>
                <div className="both-nav">
                    <div className="above-nav">
                        <div className="nav-links" id="navLinks" style={{ right: isNavOpen ? 0 : "-200px" }}>
                            <i className="fa fa-close" onClick={toggleMenu}></i>
                            <ul>
                                <li><Link to={"/"}>HOME</Link></li>
                                <li><Link to={"/about"}>ABOUT</Link></li>
                                <li><Link to={"/menu"}>MENU</Link></li>
                                <li><Link to={"/book"}>BOOK</Link></li>
                                <li><Link to={"/contact"}>CONTACT</Link></li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={toggleMenu}></i>
                    </div>
                </div>
            </nav>

    )
}

export default Nav;