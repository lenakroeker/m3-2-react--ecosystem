import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import './style.css';
import PropTypes from 'prop-types';


const Fruitbox = styled.div`
    text-align: center;
    padding: 40px;
    padding-bottom:10px;
    box-shadow: 0px 2px 65px 0px rgba(0,0,0,0.13);
    border-radius: 20px;
    margin: 30px;

`;

const Fruitimg = styled.img`
    border-radius: 10px;
    margin-top: -60px;
`;

const Fruitname = styled.h2`
font-family: 'Passion One', cursive;
font-weight: 400;
text-decoration:none;
`;

const Latin = styled.h3`
    font-family: sans-serif;
    font-style: italic;
    font-weight: 200;
    font-size: 16px;
    color: grey;
`
const Slink = styled(Link)`
    color: black;
    `


export const ListingGrid = ({ itemList }) => {
    let gallery = []
    itemList.map((item) => {
        gallery.push(
            <Fruitbox>
                <Slink to={`/items/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                    <Fruitimg src={item.imageSrc} width="200px"></Fruitimg>
                    <Fruitname>{item.name}</Fruitname>
                    <Latin>{item.latinName}</Latin>
                </Slink>
            </Fruitbox>
        )
    })
    return gallery;
};

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};