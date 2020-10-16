import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import './style.css';

const Head = styled.header`
    display: flex;
    flex-direction: row;
`;

const Title = styled.h1`
margin-left: 100px;
font-family: 'Passion One', cursive;
font-weight: 400;
font-size: 40px;
`;



export const Header = () => {
    return (
        <Head>
            <Title>Fruit Emporium</Title>
            <NavLink className="Hlink1" exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink className="Hlink2" exact to="/about" activeClassName="selected">About</NavLink>
        </Head>)
};



