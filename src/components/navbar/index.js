import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements' 

export const Navbar = () => {
    
    return (
        <>

            <Nav>
                <NavLink to="/">
                    <h1>stats</h1>
                </NavLink>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to="/top-songs" activeStyle>
                        Top Songs
                    </NavLink>
                    <NavLink to="/top-artists" activeStyle>
                        Top Artists
                    </NavLink>
                    <NavLink to="/top-genres" activeStyle>
                        Top Genres
                    </NavLink>
                    <NavLink to="/recommendations" activeStyle>
                        Recommendations
                    </NavLink>
                    <NavLink to="/visuals" activeStyle>
                        Visuals
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-out'>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>

        </>
    )
}


export default Navbar;