import { StepLabel } from "@material-ui/core";
import styled from "styled-components/macro";

export const Wrapper = styled.div`
background-color:#1c1c1c;
width:70vw;
display:flex;
flex-direction:column;

background-image:url(${process.env.PUBLIC_URL+"/images/tropical.png"});
background-size: cover;

@media(max-width:1200px){
    width:100vw;
}

`;

export const FooterTop= styled.div`

width:100%;
display: grid;
grid-template-columns: 20% 50% 30%;

`

export const ContactArea = styled.div`

padding:1rem;
padding-left:2rem;
diaplay:flex;
flex-direction:column;
`;

export const InfoArea = styled.div`
display:grid;
grid-template-columns: 30% 30% 30%;
padding:1rem;

`;

export const Logo = styled.div`

display:flex;
flex-direction:column;
align-items:Center;

`;


export const LogoImage = styled.img`

height:200px;




`;

export const Icon = styled.img`
height:20px;
margin:0.5rem;
`

export const FooterBottom = styled.div`
text-align:center;
width:100%;
color:white;

`;



export const DetailColumn = styled.div`

margin-left:1rem;
`;

export const DetailHeader = styled.h1`

font-size:1.2em;
color:#ffa600;
font-family: 'Poppins', sans-serif;
`;

export const DetailText = styled.h2`

font-size:0.8em;
color:#c4c4c4;
font-family: 'Roboto', sans-serif;

`;





export const DetailParagraph = styled.p`
font-size:0.7em;
color:#c4c4c4;
text-align:left;
font-family: 'Roboto', sans-serif;


`;

export const ContactTitle = styled.h1`

font-size:1.2em;
color:#ffa600;
font-family: 'Poppins', sans-serif;

`;

export const ContactInput = styled.input`

width:80%;
height:2rem;
border:none;
outline:none;
border-radius:2px 0 0 2px;
padding:0.5rem;
padding-left:1rem;

@media(max-width:1000px){
    
    
}

`;

export const ContactButton =styled.button`


border:none;
margin-top:1rem;
padding:0.5rem 2rem 0.5rem 2rem;
border-radius: 0 2px 2px 0;
color:white;
transition: 0.5s;
background-color:#fc7b03;
&:hover {
    background-color:#ff8c00;
}

`;

export const ContactSubtitle = styled.h2`

font-size:0.8em;
color:#c4c4c4;
font-family: 'Roboto', sans-serif;
text-align:center;

`;
