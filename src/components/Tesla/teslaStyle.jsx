import styled from "styled-components";

export const TeslaImg = styled.img`
    width: 100%;
`

export const LogoImg = styled.img`
    width: 100%;
`



export const FlexDiv = styled.div`
display: flex;
justify-content: center;
align-items: center ;
background-color: #F5F7FA;
color: #000;

padding: 15px;

@media screen and (max-width: 427px){
      
        flex-direction: column;
    }
    
`
export const RightFlexDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 1024px){
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column-reverse;
        gap: 10px;
        
    }

   

   
`

export const DivRight = styled.div`
    width: 60%;
    margin-left: 3%;

    h2{
       margin: 0;
        color: #4CAF4F;
    }
    p{
        margin-top: 0;
    }
    h3{
        color: #4CAF4F;
    }

    @media screen and (max-width: 427px){
      
        width: 100%;
    }
`