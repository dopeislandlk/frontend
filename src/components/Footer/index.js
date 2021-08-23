import { FormHelperText, styled } from '@material-ui/core';
import React, { Children, Component } from 'react';
import {Wrapper,FooterTop,ContactArea, InfoArea, Logo, FooterBottom, DetailColumn,
    DetailHeader, DetailText, DetailParagraph, ContactTitle, ContactInput, 
    ContactButton,ContactSubtitle, LogoImage, Icon} from "./styles/styles"
import LogoPath from "../../top.png"

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

Footer.Logo=({children})=>{
    return (
        <Logo>{children}</Logo>
    )
}

Footer.InfoArea=({children})=>{
    return (
        <InfoArea>{children}</InfoArea>
    )
}

Footer.ContactArea=()=>{
    return (
        <ContactArea>
            <ContactTitle>What do you think?</ContactTitle>
            <ContactInput placeholder="your message"></ContactInput>
            <ContactButton>send</ContactButton>
            <ContactSubtitle>write to us. we would like to hear from you</ContactSubtitle>
        </ContactArea>
    )
}

Footer.DetailColumn=({children})=>{
    return (
        <DetailColumn>{children}</DetailColumn>
    )
}

Footer.DetailHeader=({children})=>{
    return (
        <DetailHeader >{children}</DetailHeader>
    )
}

Footer.DetailText=({children})=>{
    return (
        <DetailText>{children}</DetailText>
    )
}


Footer.DetailParagraph=({children})=>{
    return (
        <DetailParagraph>{children}</DetailParagraph>
    )
}

Footer.LogoImage=({url})=>{
    return (
        <LogoImage src={url}></LogoImage>
    )
}

Footer.Icon=({url})=>{
    return(
        <Icon src={url}></Icon>
    )
}
export default Footer;