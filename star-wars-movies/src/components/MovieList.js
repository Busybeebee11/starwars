
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// image loader
import ImageLoader from '../images/download.svg'
// card background images
import bgCard1 from '../images/bg-card-1.png';
import bgCard2 from '../images/bg-card-2.png';
import bgCard3 from '../images/bg-card-3.png';
import bgCard4 from '../images/bg-card-4.png';
import bgCard5 from '../images/bg-card-5.png';
import bgCard6 from '../images/bg-card-6.png';

const StyledMovieListCont = styled.div`
    width: 80%;
    padding: 0 15px;
    margin: 0 auto;

         @media (max-width: 1024px) {
            width: 94%;
        }

        @media (max-width: 991px) {
            width: 74%;
        }

        @media (max-width: 768px) {
            width: 86%;
        }

         @media (max-width: 767px) {
            width: 64%;
        }

        @media (max-width: 600px) {
            width: 82%;
        }

        @media (max-width: 575px) {
            width: 100%;
        }
`;

const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 77vh;
`;

const StyledLoaderImage = styled.img`
    filter: invert(91%) sepia(41%) saturate(2104%) hue-rotate(334deg) brightness(104%) contrast(102%);
    width: 80px;
    animation: rotate 5s linear infinite;

    @keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
`;

const StyledMovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

const StyledMovieCardCont = styled.div`
    flex-basis: calc(33.33%);
    padding: 0 15px;
    margin: 15px 0;
    width: 100%;

        @media (max-width: 991px) {
            flex-basis: calc(50%);
        }

        @media (max-width: 767px) {
            flex-basis: calc(100%);
        }
`;

const StyledMovieCard = styled.div`
    display: block;
    background-color: rgb(35, 35, 35);
    padding: 20px;
    color: rgb(255, 255, 255);
    transform: perspective(1px) translateZ(0px);
    box-shadow: transparent 0px 0px 10px 3px, rgb(0, 0, 0) 0px 0px 10px;
    transition: all 0.3s ease 0s;
    overflow: hidden;
    border-radius: 0.5rem;

    &:hover {
        box-shadow: rgb(32, 152, 209) 0px 0px 10px 3px, rgb(0, 0, 0) 0px 0px 10px;
    }   
`;

const StyledMovieTitleDate = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 17px;
`;

const StyledMovieTitle = styled.h3`
    font-family: "Star Jedi", "Open Sans", sans-serif;
    font-size: 1.375rem;
    font-weight: 700;
    letter-spacing: 2px;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 767px) {
        font-size: 19px;
    }

    @media (max-width: 600px) {
        font-size: 19.8px;
    }

    @media (max-width: 575px) {
        font-size: 17px;
    }
`;

const StyledMovieTitle2 = styled.a`
    color: rgb(255, 255, 255);
    text-decoration: none;
`;

const StyledMovieDate = styled.span`
    color: rgb(157, 157, 157);
    font-size: 0.875rem;

    @media (max-width: 768px) {
        font-size: 12.6px;
    }
`;

const StyledMovieInfo = styled.p`
// style used first before creating a substring - removed all media queries for webkit clamp
//     display: -webkit-box;
//     -webkit-line-clamp: 7; /* specify the number of lines */
//     -webkit-box-orient: vertical;
//     overflow: hidden;

    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 25px;

        @media (max-width: 768px) {
            font-size: 14.3px;
            margin-bottom: 22.5px;
        }

        @media (max-width: 575px) {
            font-size: 12.4px;
            margin-bottom: 20px;
        }
        
        @media (max-width: 320px) {;
            font-size: 12px;
        }
`;

const StyledMovieInfoMoreInfo = styled.div`
    padding-top: 1.2rem;
    font-size: 0.875rem;
    text-transform: capitalize;
    border-top: 2px solid rgb(142, 46, 46); 
    color: rgb(255, 232, 31);
    cursor: pointer;

    @media (max-width: 768px) {
        padding-top: 10px;
    }

    @media (max-width: 767px) {
       font-size: 11.2px;
       padding-top: 9px;
    }
`;
  
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);

    // Create an array of the images
    const bgImages = [bgCard1, bgCard2, bgCard3, bgCard4, bgCard5, bgCard6];

    // Length of crawl
    const MAX_CRAWL_LENGTH = 260;

    return (
        <StyledMovieListCont>
            {loading && (
                <StyledLoader>
                    <StyledLoaderImage src={ImageLoader} alt="Loading..." />
                </StyledLoader>
            )}
            <StyledMovieList>
                {movies.map((movie, index) => (
                    <StyledMovieCardCont key={movie.episode_id}>
                        <StyledMovieCard style={{ backgroundImage: `url(${bgImages[index]})` }}>
                            <StyledMovieTitleDate>
                                <StyledMovieTitle>
                                    <StyledMovieTitle2 href={movie.url}>{movie.title}</StyledMovieTitle2>
                                </StyledMovieTitle>
                                <StyledMovieDate>{formatDate(movie.release_date)}</StyledMovieDate>
                            </StyledMovieTitleDate>
                            <StyledMovieInfo>{movie.opening_crawl.substring(0, MAX_CRAWL_LENGTH)}...</StyledMovieInfo>
                            {/* <StyledMovieInfo>{movie.opening_crawl}</StyledMovieInfo> */}

                            <StyledMovieInfoMoreInfo>
                                More info
                            </StyledMovieInfoMoreInfo>
                        </StyledMovieCard>
                    </StyledMovieCardCont>
                ))}
            </StyledMovieList>
        </StyledMovieListCont>
    );
};

export default MovieList;


