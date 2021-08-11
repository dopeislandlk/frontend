import Header from "../components/Header"
import React, { Component } from 'react';

const HeaderWrapper = () => {
    return ( 
        <div>
            <Header>
                <Header.Banner></Header.Banner>
            </Header>
        </div>
     );
}
 
export default HeaderWrapper;