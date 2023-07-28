
// import React from 'react';
// import { Link } from 'react-router-dom';
// import HeaderLogo from '../images/download-1.svg';
// import styled from 'styled-components';

// const StyledBackLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   font-size: 16px;
//   margin-left: 20px;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const HeaderSection = ({ showBackLink = false }) => {
//     return (
//         <StyledHeader>
//             {showBackLink && (
//                 <StyledBackLink to="/">Back to List</StyledBackLink>
//             )}
//             <StyledLogoContainer>
//                 <StyledLogo src={HeaderLogo} alt="header logo" />
//             </StyledLogoContainer>
//         </StyledHeader>
//     );
// };

// const StyledHeader = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 20px;
// `;

// const StyledLogoContainer = styled.div`
//   flex: 1;
// `;

// const StyledLogo = styled.img`
//   max-height: 60px;
// `;

// export default HeaderSection;


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