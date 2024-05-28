import styled from "styled-components";

export const MainFlexdiv = styled.div`
    display: flex;
  
 justify-content: space-around;
   margin-top: 20px;
   background-color: #263238;
   color: white;

   @media screen and (max-width: 993px) {
    flex-direction: column;
    
   }

`
export const LeftDiv = styled.div`
padding: 40px;

@media screen and (max-width: 993px) {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   flex-direction: column;
    
   }

   
`
export const RightDiv = styled.div`
display: flex;
gap: 80px;
padding: 10px;

ul{
    list-style-type: none;
    cursor: pointer;
}

li{
    padding: 10px;
    &:hover{
        color: #4CAF4F;
    }
}
h3{
    text-align: center;
}
input{
    border-radius: 8px;
    padding: 10px 15px;
    border: none;
    background-color: #D9DBE1;
}
@media screen and (max-width: 993px) {
   justify-content: center;
    
   }

@media screen and (max-width: 427px) {
   flex-direction: column;
   text-align: center;
   gap: 50px;
   margin-right: 50px;

   h3{
    margin-left: 30px;
   }
   form{
    margin-left: 30px;
   }

}

  
`
export const LogoImg = styled.img`
    
`

export const SocialImge = styled.img`
    width: 30px;
    padding-left: 10px;
`

export const ColItem = styled.div`
   
`