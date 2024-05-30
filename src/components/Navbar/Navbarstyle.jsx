import styled from "styled-components";

export const Navimg = styled.img`
    width: 150px;
`;

export const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
`;

export const DivUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;
    cursor: pointer;

   

    @media screen and (max-width: 980px) {
        display: none;
    }

    /* &.open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1;
    } */
`;

export const ItemLi = styled.li`
    list-style-type: none;
    padding: 10px ;
    &:hover{
        color: #4CAF4F;
    }

    @media screen and (max-width: 980px) {
        display: block;
        text-align: center;
    }
`;

export const Buttondiv = styled.div`
    display: flex;

    @media screen and (max-width: 980px) {
        display: none;
    }

    /* &.open {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        position: absolute;
        top: 300px;
        left: 0;
        background-color: white;
        padding: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1;
    } */
`;

export const HamburgerImg = styled.img`
    width: 40px;
    display: none;

    @media screen and (max-width: 980px) {
        display: block;
    }
`;

export const ButtonItem = styled.button`
    padding-left: 10px;
    background-color: ${props => props.primary ? '#4CAF4F' : 'white'};
    color: ${props => props.primary ? 'white' : '#4CAF4F'};
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
   
`;

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: white;
        position: absolute;
        top: 60px;
        left: 0;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        z-index: 1;
    }
`;
