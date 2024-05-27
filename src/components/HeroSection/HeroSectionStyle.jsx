import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 104px;
    background-color: #F5F7FA;
    height: 599px;
  

    h1{
        font-size: 60px;
        font-weight: 600;
        color: #4D4D4D;
        margin-bottom: 0px;
        
       
    }
    span{
        color: #4CAF4F;
    }

    p{
        color: #717171;
        font-weight: 400;
        font-size: 16px;
    }
    button{
        background-color: #4CAF4F;
        padding: 14px 32px 14px 32px;
        border-radius: 4px;
        border: none;
        color: white;

        @media screen and (max-width: 768px){
        margin-bottom: 15px;
    }
    }

    @media screen and (max-width: 965px) {
        flex-direction: column-reverse;
       height: auto;
       gap: 40px;

       img{
        padding-top: 50px;
       }
        
    }

    @media screen and (max-width: 559px){
        padding: 20px;
        h1{
            font-size: 40px;
        }
    }
    @media screen and (max-width: 410px){
       
        h1{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1025px) {
       padding: 20px;
    }
`
export const HeroImg = styled.img`
width: 100%;
    
`