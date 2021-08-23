import React, { Component } from 'react';
import Footer from  "../components/Footer"
const FooterContainer = () => {
    return ( 
        <Footer>
            
            <Footer.FooterTop>
                <Footer.Logo> 
                    <Footer.LogoImage url={process.env.PUBLIC_URL+"/images/logo.png"}></Footer.LogoImage>
                    <div style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                        <Footer.Icon url={process.env.PUBLIC_URL+"/images/facebook.png"}></Footer.Icon>
                        <Footer.Icon url={process.env.PUBLIC_URL+"/images/instagram.png"}></Footer.Icon>
                        <Footer.Icon url={process.env.PUBLIC_URL+"/images/twitter.png"}></Footer.Icon>
                    </div>
                </Footer.Logo>


                <Footer.InfoArea>
                    <Footer.DetailColumn>
                        <Footer.DetailHeader>Browse</Footer.DetailHeader>
                        <Footer.DetailParagraph>
                            Liquor- Liquor is simply the name used to describe any distilled beverage. 
                            Simply put, staples like gin, vodka, rum and tequila are all forms of liquor.
                            nLiquor also is distilled and has an alcohol content of at least 20 percent, although 40 percent is more common. 
                        </Footer.DetailParagraph>
                       
                       
                    </Footer.DetailColumn>
                        

                    <Footer.DetailColumn>
                        <Footer.DetailHeader>Browse</Footer.DetailHeader>
                        <Footer.DetailText>Home</Footer.DetailText>
                        <Footer.DetailText>About Us</Footer.DetailText>
                        <Footer.DetailText>Register</Footer.DetailText>
                        <Footer.DetailText>Blog</Footer.DetailText>
                    </Footer.DetailColumn>


                    <Footer.DetailColumn>
                        <Footer.DetailHeader>Contact Us</Footer.DetailHeader>
                        <Footer.DetailText>mobile: 0715973494</Footer.DetailText>
                        <Footer.DetailText>email:dopeislandlk@gmail.com</Footer.DetailText>
                        <Footer.DetailText>12/1 Colombo, SriLanka</Footer.DetailText>

                    </Footer.DetailColumn>
                </Footer.InfoArea>

                <Footer.ContactArea >

                    

                </Footer.ContactArea>
            </Footer.FooterTop>


            <Footer.FooterBottom> developed by dopeislandlk@2021</Footer.FooterBottom>


        </Footer>
     );
}
 
export default FooterContainer;

