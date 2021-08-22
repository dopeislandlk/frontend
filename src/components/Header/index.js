import React, { Component } from 'react';
import { Wrapper,SearchWrapper,SeacrhInput,SearchButton} from './styles/styles';


const Header = ({children}) => {
    return ( 
        <Wrapper>{children}</Wrapper>
     );
}
 
export default Header;

Header.Search = () =>{
    return (
        <SearchWrapper>
            <SeacrhInput placeholder="what's in your mind"></SeacrhInput>
            <SearchButton>Go</SearchButton>
        </SearchWrapper>
    )
}

