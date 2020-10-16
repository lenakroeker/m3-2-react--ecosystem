import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import './style.css';
import { items } from "../data";
import { ListingGrid } from "./ListingGrid";

const Imgarea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Hometext = styled.p`
    font-family: sans-serif;
    margin: 20px;
    margin-left: 120px;
`
const Homebold = styled.p`
    font-family: 'Passion One', cursive;
    font-weight: 400;
    font-size: 20px;
    margin: 10px;
    margin-left: 120px;
    margin-bottom: 30px;
`

let data = Object.values(items);


export const Homepage = () => {
    return (
        <div>
            <Hometext>Fruit emporium sells the finest fruits from this world and beyond.</Hometext>
            <Homebold>Browse items:</Homebold>
            <Imgarea>
                <ListingGrid itemList={data} />
            </Imgarea>

        </div>
    )
}