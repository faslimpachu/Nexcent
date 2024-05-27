import styled from "styled-components";


export const LoginImage = styled.img`

@media screen and (max-width: 768px){
   width: 100%;
   
  }
    
`

export const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    margin-top: 40px;
    padding: 25px;
    
    @media screen and (max-width: 1026px){
        margin-left: 2%;
   
  }

  @media screen and (max-width: 768px){
     flex-direction: column;
   
  }
    
`

export const TextDiv = styled.div`
  p{
    width: 70%;
  }
 

  @media screen and (max-width: 1024px){
    p{
        width: 100%;
    }
    
  }

  @media screen and (max-width:3768px){
    h1{
        font-size: 1.5rem;
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

