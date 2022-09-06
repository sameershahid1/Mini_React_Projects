import styled from "styled-components";


export const StyleSocialIcon=styled.ul`
display: flex;
align-items: center;
justify-content: center;

a
{
    border: 1px solid #fff;
    border-radius:50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right:10px;
    height:40px;
    width:40px;
    text-decoration: none;
}

a:hover
{
    transform: scale(1.2);
    transition:0.7s ease-in transform;
    color: black;
    border: 3px solid black;
    box-shadow: 0 0 15px 1px rgba(0,0,0,0.4);
}

`;
