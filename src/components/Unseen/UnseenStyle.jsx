import styled from "styled-components";

export const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 30px;
  


   @media screen and (max-width: 1326px) {
    flex-direction: column;
    margin: 0;
    
   }
   @media screen and (max-width: 1024px){
        gap: 40px;
       
    }
`

export const UnseenImg = styled.img`
  
  @media screen and (max-width: 376px) {
      
      width: 100%;
     
      
  }
`

export const LeftDiv = styled.div`

padding-left: 15px;
    
`

export const RightDiv = styled.div`
   

    h1{
        width: 70%;
    }

    p{
        width: 80%;
    }
    button{
        background-color: #4CAF4F;
        padding: 14px 32px 14px 32px;
        border-radius: 4px;
        border: none;
        color: white;
    }

    @media screen and (max-width: 1024px){
        margin-left: 20%;
       
    }

    @media screen and (max-width: 768px){
        margin-left: 10%;

        h1{
            width: 100%;
        }
       p{
        width: 100%;
       }
    }

    @media screen and (max-width: 375px){
        h1{
            font-size: larger;
        }
    }



    @media screen and (max-width: 325px) {
      
        h1{
            width: auto;
            
        }
        p{
            width: 100%;
        }
        
    }
`