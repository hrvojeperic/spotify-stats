import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements' 

export const Navbar = () => {
    const headerStyle1 = {
        fontSize: "30px",
        color: "white",
        display:"inline"
    }

    const headerStyle2 = {
        fontSize: "30px",
        color: "#1DB954",
        display:"inline"
    }
    return (
        <>
            <Nav>
                <NavLink to="/spotify-stats">
                    <h1 style={headerStyle1}>Spotify</h1>
                    <h1 style={headerStyle2}>Stats</h1>
                </NavLink>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to="/spotify-stats/top-songs" activeStyle>
                        Top Songs
                    </NavLink>
                    <NavLink to="/spotify-stats/top-artists" activeStyle>
                        Top Artists
                    </NavLink>
                    <NavLink to="/spotify-stats/top-genres" activeStyle>
                        Top Genres
                    </NavLink>
                    <NavLink to="/spotify-stats/recommendations" activeStyle>
                        Recommendations
                    </NavLink>
                    <NavLink to="/spotify-stats/visuals" activeStyle>
                        Visuals
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/spotify-stats/sign-out'>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}


export default Navbar;