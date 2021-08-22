import { FormHelperText, styled } from '@material-ui/core';
import React, { Children, Component } from 'react';
import {Wrapper,FooterTop,ContactArea, InfoArea, Logo, FooterBottom, ContactHeader} from "./styles/styles"
const Footer = ({children}) => {
    return ( 
        <Wrapper>{children}</Wrapper>
     );
}


Footer.FooterTop =({children})=>{
    return (
        <FooterTop>{children}</FooterTop>
    )
}


Footer.FooterBottom =({children})=>{
    return (
        <FooterBottom>{children}</FooterBottom>
    )
}

Footer.Logo=()=>{
    return (
        <Logo></Logo>
    )
}

Footer.InfoArea=()=>{
    return (
        <InfoArea></InfoArea>
    )
}

Footer.ContactArea=(props)=>{
    return (
        <ContactArea>

           <ContactHeader>{props.header}</ContactHeader>
           <h2>daham</h2>

        </ContactArea>
    )
}

export default Footer;