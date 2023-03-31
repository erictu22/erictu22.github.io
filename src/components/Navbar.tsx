import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H2 } from './Text';

export const Navbar : React.FC = () => {
    return <NavbarWrapper>
        <H2>Eric Tu</H2>
        <Routes>
            <Link to='/'> Home</Link>
            <Link to='/blog'> Blog </Link>
            <Link to='/projects'> Projects </Link>
        </Routes>
    </NavbarWrapper>
}

const NavbarWrapper = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Routes = styled.div`
    display: flex;
    flex-direction: row;
`