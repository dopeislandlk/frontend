import styled from "styled-components/macro";

export const Wrapper = styled.div`
    background-color: red;
    height:400px;
    width:70vw;
    text-align:center;
    background-image:url(${process.env.PUBLIC_URL+"/images/banner.png"});
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(max-width:1200px){
        width:100vw;
    }
`;

export const SearchWrapper = styled.div`

display:flex;
flex-direction:row;


`;
export const SeacrhInput = styled.input`

    width:50vw;
    height:2rem;
    border:none;
    outline:none;
    border-radius:2px 0 0 2px;
    padding:0.5rem;
    padding-left:1rem;

    @media(max-width:1000px){
        
        
    }

`;
export const SearchButton = styled.button`
    border:none;
    padding:0 1rem 0 1rem;
    border-radius: 0 2px 2px 0;
    color:white;
    transition: 0.5s;
    background-color:#fc7b03;
    &:hover {
        background-color:#ff8c00;
    }
`;