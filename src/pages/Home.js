import React, { Component } from 'react';
import "./home.css"
import HeaderWrapper from "../containers/header"
import FooterContainer from "../containers/footer"
import BodyContainer from "../containers/body"
const Home = () => {
    return ( 
        <div className="HomeBody">
            <HeaderWrapper></HeaderWrapper>
            <BodyContainer></BodyContainer>
            <FooterContainer></FooterContainer>
        </div>

     );
}
 
export default Home;