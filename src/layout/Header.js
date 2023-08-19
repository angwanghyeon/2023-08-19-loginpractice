import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            {/* <NavLink to={'/'} >홈</NavLink> */}
            <a href='/'>홈</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='/board'>게시판</a>
            
            {/* <NavLink to={'/board'}>게시판</NavLink> */}
            <hr></hr>
        </header>
    );
};

export default Header;