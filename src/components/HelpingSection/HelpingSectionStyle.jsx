import styled from "styled-components";


export const Iconsimage = styled.img`
    
`

export const MainFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F7FA;
    height: auto;
    padding: 10px;
    

    @media screen and (max-width: 1025px) {
        flex-direction: column;
        text-align: center;
        
    }

`

export const MainFlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 80px;


    h1{
        margin: 0;
    }
    p{
        margin-top: 0;
    }

    @media screen and (max-width: 427px) {
        flex-direction: column;
        row-gap: 30px;
      
       
        
    }

`

export const TextDiv = styled.div`
    padding-right: 40px;

    h1{
        margin-bottom: 0;
    }
    span{
        color: #4CAF4F;
    }

    @media screen and (max-width: 1025px) {
        text-align: center;
        margin-bottom: 20px;

        h1{
            font-size: 3rem;
          
        }


        
    }
    @media screen and (max-width: 427px){
        text-align: center;
        margin-left: 50px;
        h1{
            font-size: 1.7rem;
        }
    }
`