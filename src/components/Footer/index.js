import React, { Children, Component } from 'react';
import {Wrapper, Logo, TextWrapper, RegisterWrapper, RegisterInput, RegisterButton} from "./styles/styles"
const Footer = ({children}) => {
    return ( 
        <Wrapper>{children}</Wrapper>
     );
}

Footer.Logo =()=>{
    return(
        <Logo src={process.env.PUBLIC_URL+"/images/logo.png"}></Logo>
    )
}

Footer.TextWrapper =()=>{
    return (
        <TextWrapper>
            <h1>Title</h1>
            <h1>Title</h1>
            <h1>Title</h1>
            <h1>Title</h1>
        </TextWrapper>
    )
}

Footer.RegisterWrapper =()=>{
    return (
        <RegisterWrapper>
            <RegisterInput placeholder="enter you email"></RegisterInput>
            <RegisterButton>follow</RegisterButton>
        </RegisterWrapper>
    )
}
export default Footer;