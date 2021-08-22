import Header from "../components/Header"
import React, { Component } from 'react';

const HeaderWrapper = () => {
    return ( 
        <div>
            <Header>
                <Header.Search></Header.Search>
            </Header>
        </div>
     );
}
 
export default HeaderWrapper;