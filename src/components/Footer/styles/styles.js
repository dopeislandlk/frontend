import { StepLabel } from "@material-ui/core";
import styled from "styled-components/macro";

export const Wrapper = styled.div`
background-color:#1c1c1c;
width:70vw;
display:flex;
flex-direction:column;

background-image:url(${process.env.PUBLIC_URL+"/images/tropical.png"});
background-size: cover;

@media(max-width:1000px){
    width:100vw;
}

`;

export const FooterTop= styled.div`

width:100%;
height:100px;
background-color:red;

display: grid;
grid-template-columns: 20% 50% 30%;

`

export const ContactArea = styled.div`

background-color:green;
height:100px;
margin:0;
`;

export const InfoArea = styled.div`

background-color:blue;
height:100px;

`;

export const Logo = styled.div`

background-color:green;
height:100px;

`

export const FooterBottom = styled.div`
text-align:center;
width:100%;
color:white;

`;


export const ContactHeader =styled.h1`
color:white;
font-size:1.5em;
width:100%;
background-color:red;
margin:0;

`;