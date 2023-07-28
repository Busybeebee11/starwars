
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import styled from 'styled-components';

const StyledContainer = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    overflow-y: scroll;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    padding-bottom: 2rem;
`;

const StarWarsApp = () => {
    return (
        <BrowserRouter>
            <StyledContainer>
                <HeaderSection />
                <Routes>
                    <Route exact path="/" element={<MovieList />} />
                    <Route exact path="/movie/:id" element={<MovieDetails />} />

                </Routes>
            </StyledContainer>
        </BrowserRouter>
    );
};

export default StarWarsApp;


// import React from 'react'
// import HeaderSection from './HeaderSection';
// import MovieList from './MovieList'
// import styled from 'styled-components';

// const StyledContainer = styled.div`
//     font-family: "Open Sans", sans-serif;
//     font-size: 1.6rem;
//     overflow-y: scroll;
//     color: rgb(255, 255, 255);
//     background-color: rgb(0, 0, 0);
//     padding-bottom: 2rem;
// `;

// const StarWarsApp = () => {
//     return (
//         <StyledContainer>
//             <HeaderSection />
//             <MovieList />
//         </StyledContainer>
//   )
// }

// export default StarWarsApp

