import styled from "styled-components";

export const MainDiv = styled.div`
    background-color: #F5F7FA;
    text-align: center;
    padding: 10px;
   

    h1{
        font-size: 4rem;
        padding: 10px;
        
    }
    button{
        background-color: #4CAF4F;
        padding: 14px 32px 14px 32px;
        border-radius: 4px;
        border: none;
        color: white;
    }

    @media screen and (max-width:780px) {
        h1{
            font-size: 2rem;
        }
        
    }
    @media screen and (max-width:325px) {
        h1{
            font-size: 1.5rem;
        }
        
    }

`

