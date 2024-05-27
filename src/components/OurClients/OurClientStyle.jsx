import styled from "styled-components";


export const MainDIv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;

    h3{
        margin: 0px;
        padding: 10px;
        font-size: 40px;
        color: #4D4D4D;
    }
    p{
        margin: 0px;
        color: #717171;
        text-align: center;
    }
    @media screen and (max-width: 507px){
        p{
           
           
            text-align: center;
        }
    }
`
export const ClientsLogos = styled.img`
width: 100%;
background-color: #7fe382;
    padding: 10px 10px;
   border-radius: 5px;

@media screen and (max-width: 902px) {
 width: 70%;
 margin-top: 20px;    
}
@media screen and (max-width: 322px){
    width: 70%;
    
    
}



    
`

export const LogoDiv = styled.div`
display: flex;
gap: 125px;
padding: 20px;
margin-top: 20px;

@media screen and (max-width: 1177px) {
   gap: 80px;

    
}
@media screen and (max-width: 1017px) {
   gap: 20px;
   flex-direction: column;
   padding: 0px;
   margin-top: 20px;

    
}
@media screen and (max-width: 322px){
    gap: 5px;

    
}
    
`