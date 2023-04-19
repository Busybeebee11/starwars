import React from 'react'
import HeaderLogo from '../images/download-1.svg'
import styled from 'styled-components';

const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;

     @media (max-width: 786px) {
        height: 116px;
    }

    @media (max-width: 575px) {
        height: 104px;
    }
`;

const StyledLogo = styled.img`
    filter: invert(91%) sepia(41%) saturate(2104%) hue-rotate(334deg) brightness(104%) contrast(102%);
    width: 450px;

    @media (max-width: 768px) {
        width: 380px;
    }

    @media (max-width: 575px) {
        width: 360px;
    }
`;

const HeaderSection = () => {
    return (
        <StyledLogoContainer >
           <StyledLogo src={HeaderLogo} alt="header logo"/>
        </StyledLogoContainer >
    )
}

export default HeaderSection