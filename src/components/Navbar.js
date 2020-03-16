import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = (propos)=>{
    console.log('navbar', propos)
    const totalItems = 0;
    return(
        <nav className="nav-wrapper">
            <div className="container">                
                <ul className="right">
                    <li><Link to="/">Produtos</Link></li>
                    <li>
                        <span className="badge">{totalItems}</span>
                        <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                    </li>
                </ul>
            </div>
        </nav>  
    )
}

export default Navbar;