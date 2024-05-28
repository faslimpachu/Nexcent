import styled from "styled-components";

export const BlogImage = styled.img`
    width: 80%;

    @media screen and (max-width: 427px) {
        width: 100%;
        
    }
`
export const MainDiv = styled.div`
    text-align: center;
    padding: 15px;
   
`
export const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;


    @media screen and (max-width: 427px) {
        flex-direction: column;
        gap: 35px;
        
    }
`
export const SUbDiv = styled.div`
    
`

export const DivCard = styled.div`

    padding: 10px;
    width: fit-content;

    @media screen and (max-width: 427px) {
       border: 2px solid #4CAF4F;
       border-radius: 10px;
      
        
    }
`

export const PtagDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        width: 70%;
        margin-top: 0;
        margin-bottom: 15px;
        padding: 10px;
    }

    @media screen and (max-width: 770px) {
        p{
            width: 100%;
        }
        
    }
   
`

export const Button = styled.button`
 background-color: #4CAF4F;
        padding: 14px 32px 14px 32px;
        border-radius: 4px;
        border: none;
        color: white;


    
`

export const MainDivText = styled.div`


    
`