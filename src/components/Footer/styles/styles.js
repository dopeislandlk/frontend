import { StepLabel } from "@material-ui/core";
import styled from "styled-components/macro";

export const Wrapper = styled.div`
background-color:#1c1c1c;
width:70vw;
height:40%;
display:flex;
align-items:center;
justify-content:center;

background-image:url(${process.env.PUBLIC_URL+"/images/tropical.png"});
background-size: cover;

`;

export const Logo = styled.img`

width:15%;

`;

export const TextWrapper = styled.div`

width:60%;

`;

export const RegisterWrapper = styled.div`
display:flex;
justify-content:center;

`;

export const RegisterInput = styled.input`

width:100%;
height:2rem;
border:none;
outline:none;
border-radius:2px 0 0 2px;
padding:0.5rem;
padding-left:1rem;

`;

export const RegisterButton = styled.button`

border:none;
padding:0 1rem 0 1rem;
border-radius: 0 2px 2px 0;
color:white;
transition: 0.5s;
background-color:#8f000a;
&:hover {
    background-color:#b3000c;
}

`;