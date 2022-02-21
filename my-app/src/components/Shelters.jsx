import React from "react";
import {useSelector} from 'react-redux';
import CardShelter from './CardShelter';
import { Link } from "react-router-dom";
import {StyledCard, StyledCardContainer} from '../Styles/StyledCardShelter.js';

export default function Shelters() {

    const allShelters = useSelector((state) => state.Shelters);
    console.log('estado: ', allShelters)
    return (
        <StyledCardContainer> 
         
            {
                
                allShelters?.map(e => {
                    return (
                        <CardShelter key={e.id} name={e.name} address={e.address} phonenumber={e.phoneNumber} /> 
                    )
                }) 
            }
       </StyledCardContainer>  
        );
};