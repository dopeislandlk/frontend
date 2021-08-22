import React, { Component } from 'react';
import Footer from  "../components/Footer"
const FooterContainer = () => {
    return ( 
        <Footer>
            
            <Footer.FooterTop>
                <Footer.Logo></Footer.Logo>
                <Footer.InfoArea></Footer.InfoArea>
                <Footer.ContactArea header=" Lets talk"></Footer.ContactArea>
            </Footer.FooterTop>


            <Footer.FooterBottom> developed by dopeislandlk@2021</Footer.FooterBottom>


        </Footer>
     );
}
 
export default FooterContainer;

