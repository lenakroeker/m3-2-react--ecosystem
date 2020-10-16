import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import './style.css';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

export const ItemDetails = () => {
    const params = useParams();
    const fruit = items[params.itemId];
    const seller = sellers[fruit.sellerId];
    let btntext;

    if (fruit.quantity > 0) {
        btntext = `$${fruit.price} - Buy now`;
    } else {
        btntext = "Out of stock";
    }

    console.log({ seller })
    return (
        <DeetPage>
            <FruitImg src={fruit.imageSrc} width="80%" />
            <Info>
                <FruitName>{fruit.name}</FruitName>
                <FruitLatin>{fruit.latinName}</FruitLatin>
                <Fp>{fruit.description}</Fp>
                <Origin>product of <strong>{fruit.countryOfOrigin}</strong></Origin>
                <Btn>{btntext}</Btn>
                <SellerDiv>
                    <SellerImg src={seller.avatarSrc} width="40px" height="40px" />
                    <p>Sold by: <strong>{seller.storeName}</strong></p>
                </SellerDiv>
            </Info>
        </DeetPage>
    )
};

const FruitImg = styled.img`
    border-radius: 20px;
    margin-left: 70px;
    grid-area: pic;
`
const FruitName = styled.h1`
font-family: 'Passion One', cursive;
font-weight: lighter;
font-size: 40px;
line-height: 0.5em;

`
const FruitLatin = styled.h2`
font-family: sans-serif;
font-style: italic;
color: lightgray;
font-size: 22px;
margin-bottom: 50px;
padding: 0;
line-height: 0em;
`
const Origin = styled.p`
font-family: sans-serif;
font-style: italic;

`
const SellerImg = styled.img`
    border-radius: 30px;
    margin-right: 10px;
`
const Fp = styled.p`
font-family: sans-serif;
`
const DeetPage = styled.div`
    display: grid;
    margin: 40px 100px 10px 50px;
    grid-template-columns: 45% 55%;
    grid-template-areas:
    "pic info";
`
const Info = styled.div`
grid-area: info;
font-family: sans-serif;
`
const SellerDiv = styled.div`
font-family: sans-serif;
display: flex;
flex-direction: row;
margin: 20px 0;`

const Btn = styled.button`
background: rgb(103, 72, 216);
color: white;
border: none;
font-size: 20px;
padding: 15px 50px;
margin: 15px 0;
border-radius: 10px;
font-family: sans-serif;
cursor: pointer;
`