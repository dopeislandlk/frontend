import React, { Component } from 'react';
import { Wrapper, BannerImage } from './styles/styles';


const Header = ({children}) => {
    return ( 
        <Wrapper>{children}</Wrapper>
     );
}
 
export default Header;

Header.Banner=()=>{
    return (
        <BannerImage src={process.env.PUBLIC_URL+"/images/banner.png"}></BannerImage>
    );
}