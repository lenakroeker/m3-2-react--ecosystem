import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./Header.js";
import { Homepage } from "./Homepage.js"
import styled from "styled-components";

const Abouttxt = styled.p`
font-family: sans-serif;
`;
const Aboutdiv = styled.div`
padding: 30px 120px;
`;

export const About = () => {
    return (
        <Aboutdiv>
            <Abouttxt>Fruit emporium is founded on a very simple principle: Fruit is good.</Abouttxt>
            <Abouttxt>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</Abouttxt>
        </Aboutdiv>
    )
}