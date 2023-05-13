
import React, { useState, useEffect } from 'react';
import ImageLoader from '../images/download.svg'
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledMovieDetailsCont = styled.div`
    width: 79%;
    font-family: "Open Sans", sans-serif;
    margin: 0 auto;
    padding: 0 15px;

        @media (max-width: 1024px) {
            width: 94%;
        }
        @media (max-width: 768px) {
            width: 84%;
        }
        @media (max-width: 767px) {
            width: 63%;
            padding: 0 13px;
        }
        @media (max-width: 576px) {
            width: 77%;
            padding: 0 12px;
        }
        @media (max-width: 425px) {
            width: 100%;
        }
`

const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 77vh;
`;

const StyledLoaderImage = styled.img`
    filter: invert(91%) sepia(41%) saturate(2104%) hue-rotate(334deg) brightness(104%) contrast(102%);
    width: 80px;
    animation: rotate 5s StyledMovieInfoListnear infinite;

    @keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
`;

const StyledMovieDetails = styled.div`
    width: 100%;
    background-color: rgb(35, 35, 35);
    color: rgb(255, 255, 255);
    font-size: 16px;
    padding: 30px;
    border-radius: 5px;

        @media (max-width: 768px) {
            padding: 27px;
        }
        @media (max-width: 767px) {
            padding: 24px;
        }
`

const StyledMovieInfoSection = styled.div`
    margin-bottom: 30px;
`

const StyledBackToList = styled.p`
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(157, 157, 157);
    cursor: pointer;

        @media (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 13px;
        }
        @media (max-width: 767px) {
            font-size: 12px;
            margin-bottom: 12px;
        }
`;

const StyledMovieInfoTitle = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-bottom: 15px

        @media (max-width: 768px) {
            font-size: 36px;
            margin-bottom: 13px;
        }
         @media (max-width: 767px) {
            font-size: 32px;
            margin-bottom: 12px;
        }
`

const StyledInfoValue = styled.p`
    text-align: center;
    margin-bottom: 15px;

        @media (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 9px;
        }
        @media (max-width: 767px) {
            font-size: 12px;
            margin-bottom: 8px;
        }
`

const StyledMovieDescriptionSection = styled.div`
    margin-bottom: 30px;

        @media (max-width: 768px) {
            margin-bottom: 27px;
        }
        @media (max-width: 767px) {
            margin-bottom: 24px;
        }
`

const StyledMovieInfoHeading = styled.h3`
    margin-bottom: 15px;
    color: rgb(157, 157, 157);
    font-size: 18px;

        @media (max-width: 768px) {
            font-size: 16px;
            margin-bottom: 13px
        }
        @media (max-width: 767px) {
            font-size: 14px;
            margin-bottom: 12px;
        }
`

const StyledInfoCrawl = styled.p`
    font-weight: 700;

        @media (max-width: 768px) {
            font-size: 14.2px;
        }
        @media (max-width: 767px) {
            font-size: 14.4px;
        }
        @media (max-width: 576px) {
            font-size: 13px;
        }
`

const StyledMoreInfoSection = styled.div`
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 2px solid rgb(60, 60, 60);
}
`

const StyledMovieInfoUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 18px;
`

const StyledMovieInfoList = styled.li`
    width: 33.3%;
    font-weight: 700;

        @media (max-width: 768px) {
            width: 50%;
            font-size: 14px;
        }
        @media (max-width: 767px) {
            width: 100%;
        }
        @media (max-width: 576px) {
            font-size: 13px;
        }
`

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(id)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    // renders card info with episode id from api but not matching title
    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/films/${id}`)
    //         .then(response => {
    //             setMovie(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //         .finally(() => setLoading(false));
    // }, [id]);

    const goBack = () => {
        window.history.back();
    };

    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    // const [species, setSpecies] = useState([]);

    useEffect(() => {
        const getDetails = (StyledMovieInfoListst, setter) => {
            Promise.all(
                StyledMovieInfoListst.map((url) => axios.get(url).then((response) => response.data.name))
            ).then(setter);
        };

        if (movie) {
            getDetails(movie.characters, setCharacters);
            getDetails(movie.planets, setPlanets);
            getDetails(movie.starships, setStarships);
            getDetails(movie.vehicles, setVehicles);
            // getDetails(movie.species, setSpecies);
        }
    }, [movie]);

    return (
        <StyledMovieDetailsCont>
            {!movie && loading && <StyledLoader><StyledLoaderImage src={ImageLoader} alt="Loading..." /></StyledLoader>}
            {movie && (
                <StyledMovieDetails>
                    <StyledMovieInfoSection>
                        <StyledBackToList onClick={goBack}>← Back to list</StyledBackToList>
                        <StyledMovieInfoTitle>{movie.title}</StyledMovieInfoTitle>
                        <StyledInfoValue>Director: {movie.director}</StyledInfoValue>
                        <StyledInfoValue>Producer: {movie.producer}</StyledInfoValue>
                    </StyledMovieInfoSection>

                    <StyledMovieDescriptionSection>
                        <StyledMovieInfoHeading>Description</StyledMovieInfoHeading>
                        <StyledInfoCrawl>{movie.opening_crawl}</StyledInfoCrawl>
                    </StyledMovieDescriptionSection>

                    <MovieDetailsSection heading="Characters" items={characters} />
                    <MovieDetailsSection heading="Planets" items={planets} />
                    <MovieDetailsSection heading="Starships" items={starships} />
                    <MovieDetailsSection heading="Vehicles" items={vehicles} />
                    {/* <MovieDetailsSection heading="Species" items={species} /> */}
                </StyledMovieDetails>
            )}
        </StyledMovieDetailsCont>
    );
};

const MovieDetailsSection = ({ heading, items }) => (
    <StyledMoreInfoSection>
        <StyledMovieInfoHeading>{heading}</StyledMovieInfoHeading>
        <StyledMovieInfoUl>
            {items.map((name, index) => (
                <StyledMovieInfoList key={index}>{name}</StyledMovieInfoList>
            ))}
        </StyledMovieInfoUl>
    </StyledMoreInfoSection>
);

export default MovieDetails


// episode id used to render info
// const MovieDetails = () => {
//     const [movie, setMovie] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { id } = useParams();

//     // renders card info with episode id from api but not matching title
//     useEffect(() => {
//         axios.get(`https://swapi.dev/api/films/${id}`)
//             .then(response => {
//                 setMovie(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//             .finally(() => setLoading(false));
//     }, [id]);

//     const goBack = () => {
//         window.history.back();
//     };

//     const [characters, setCharacters] = useState([]);
//     const [planets, setPlanets] = useState([]);
//     const [starships, setStarships] = useState([]);
//     const [vehicles, setVehicles] = useState([]);
//     // const [species, setSpecies] = useState([]);

//     useEffect(() => {
//         const getDetails = (StyledMovieInfoListst, setter) => {
//             Promise.all(
//                 StyledMovieInfoListst.map((url) => axios.get(url).then((response) => response.data.name))
//             ).then(setter);
//         };

//         if (movie) {
//             getDetails(movie.characters, setCharacters);
//             getDetails(movie.planets, setPlanets);
//             getDetails(movie.starships, setStarships);
//             getDetails(movie.vehicles, setVehicles);
//             // getDetails(movie.species, setSpecies);
//         }
//     }, [movie]);

//     return (
//         <StyledMovieDetailsCont>
//             {!movie && loading && <StyledLoader><StyledLoaderImage src={ImageLoader} alt="Loading..." /></StyledLoader>}
//             {movie && (
//                 <StyledMovieDetails>
//                     <StyledMovieInfoSection>
//                         <StyledBackToList onClick={goBack}>← Back to list</StyledBackToList>
//                         <StyledMovieInfoTitle>{movie.title}</StyledMovieInfoTitle>
//                         <StyledInfoValue>Director: {movie.director}</StyledInfoValue>
//                         <StyledInfoValue>Producer: {movie.producer}</StyledInfoValue>
//                     </StyledMovieInfoSection>

//                     <StyledMovieDescriptionSection>
//                         <StyledMovieInfoHeading>Description</StyledMovieInfoHeading>
//                         <StyledInfoCrawl>{movie.opening_crawl}</StyledInfoCrawl>
//                     </StyledMovieDescriptionSection>

//                     <MovieDetailsSection heading="Characters" items={characters} />
//                     <MovieDetailsSection heading="Planets" items={planets} />
//                     <MovieDetailsSection heading="Starships" items={starships} />
//                     <MovieDetailsSection heading="Vehicles" items={vehicles} />
//                     {/* <MovieDetailsSection heading="Species" items={species} /> */}
//                 </StyledMovieDetails>
//             )}
//         </StyledMovieDetailsCont>
//     );
// };

// const MovieDetailsSection = ({ heading, items }) => (
//     <StyledMoreInfoSection>
//         <StyledMovieInfoHeading>{heading}</StyledMovieInfoHeading>
//         <StyledMovieInfoUl>
//             {items.map((name, index) => (
//                 <StyledMovieInfoList key={index}>{name}</StyledMovieInfoList>
//             ))}
//         </StyledMovieInfoUl>
//     </StyledMoreInfoSection>
// );
