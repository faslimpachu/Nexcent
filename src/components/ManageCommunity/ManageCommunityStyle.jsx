import styled from "styled-components";


export const IconImage= styled.img`

    
`

export const DivmainText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2{
        margin-bottom: 0;
        font-size: 36px;
        font-weight: 600;
        padding: 10px;
        
    }

    @media screen and (max-width: 520px) {
        h2{
            font-size: 25px;
        }
        
    }
    @media screen and (max-width: 390px) {
        h2{
            font-size: 20px;
            padding: 10px;
        }
    }
`

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    gap: 80px;

    @media screen and (max-width: 1030px) {
        gap: 15px;
        
    }
    @media screen and (max-width: 996px) {
       flex-direction: column;
       gap: 30px;
        
    }
    
`

export const DivCrad = styled.div`
    background-color: #ffff;
    border: 1px solid #4CAF4F;
    width: auto;
    height: 260px;
    box-shadow: 0 2 4 0;
    padding: 15px 25px;
    border-radius: 5px;
    text-align: center;

    @media screen and (max-width: 360px) {
        width: auto;
    }
`