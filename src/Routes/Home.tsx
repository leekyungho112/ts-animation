import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  getMovies,
  IGetMoviesResult,
  similarMovie,
  topMovies,
  upcomingMovie,
} from '../api';
import { makeImagePath } from '../utils';
import { useNavigate, useMatch } from 'react-router-dom';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import Similar from '../Components/Similar';
const Wrapper = styled.div`
  background-color: black;
  padding-bottom: 300px;
  overflow: hidden;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
`;

const OverView = styled.p`
  font-size: 18px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;
const UpcomingSlide = styled.div`
  margin-top: 200px;
  position: relative;
`;
const TopSlide = styled.div`
  margin-top: 500px;
  position: relative;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.darker};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 14px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 80vh;
  background-color: ${(props) => props.theme.black.darker};
  border-radius: 15px;
  overflow-y: scroll;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const BigImage = styled.div`
  width: 100%;
  height: 400px;
  background-position: center center;
  background-size: cover;
`;
const BigTitle = styled.h3`
  padding: 20px;
  position: relative;
  top: -60px;
  font-size: 30px;
  color: ${(props) => props.theme.white.lighter};
`;
const BigOverView = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  font-size: 14px;
  color: ${(props) => props.theme.white.lighter};
`;
const BigDate = styled.span`
  padding: 20px;
  position: relative;
  top: -80px;

  color: ${(props) => props.theme.white.lighter};
`;
const ArrowBtn = styled.div`
  width: 50px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
`;
const rowVariants = {
  hidden: { x: window.outerWidth - 5 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth + 5 },
};
const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    borderRadius: 15,
    overflow: 'hidden',
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: 'tween',
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 0.3,
      type: 'tween',
    },
  },
};
const offset = 6;

const Home = () => {
  const navigate = useNavigate();
  const bigMovieMatch = useMatch('/movies/:movieId');
  const { scrollY } = useViewportScroll();
  const { data, isLoading: nowLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies
  );

  const {
    data: topMovieData,
    isLoading: topMovieLoading,
  } = useQuery<IGetMoviesResult>(['movie', 'topMovie'], topMovies);
  const {
    data: upcomingData,
    isLoading: upcomingLoading,
  } = useQuery<IGetMoviesResult>(['movie', 'upcoming'], upcomingMovie);

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  const onOverlayClick = () => navigate('/');
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id + '' === bigMovieMatch.params.movieId
    );

  const topMovieClick =
    bigMovieMatch?.params.movieId &&
    topMovieData?.results.find(
      (movie) => movie.id + '' === bigMovieMatch.params.movieId
    );
  const upcomingClick =
    bigMovieMatch?.params.movieId &&
    upcomingData?.results.find(
      (movie) => movie.id + '' === bigMovieMatch.params.movieId
    );
  const isLoading = nowLoading || topMovieLoading || upcomingLoading;
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading....</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0]?.title}</Title>
            <OverView>{data?.results[0]?.overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ''}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                      bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
            <ArrowBtn onClick={incraseIndex}>
              <IoArrowForward style={{ fontSize: 30 }} />
            </ArrowBtn>
          </Slider>
          <UpcomingSlide>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {upcomingData?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ''}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                      bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </UpcomingSlide>
          <TopSlide>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {topMovieData?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ''}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                      bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </TopSlide>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  style={{
                    top: scrollY.get() + 100,
                    bottom: scrollY.get() + 100,
                  }}
                  layoutId={bigMovieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <BigImage
                        style={{
                          backgroundImage: `linear-gradient(to top,black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            'w500'
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverView>{clickedMovie.overview}</BigOverView>
                      <BigDate>{clickedMovie.release_date}</BigDate>
                      <Similar movieId={clickedMovie.id + ''} />
                    </>
                  )}
                  {/* {upcomingClick && (
                    <>
                      <BigImage
                        style={{
                          backgroundImage: `linear-gradient(to top,black, transparent), url(${makeImagePath(
                            upcomingClick.backdrop_path,
                            'w500'
                          )})`,
                        }}
                      />
                      <BigTitle>{upcomingClick.title}</BigTitle>
                      <BigOverView>{upcomingClick.overview}</BigOverView>
                      <BigDate>{upcomingClick.release_date}</BigDate>
                    </>
                  )} */}
                  {/* {topMovieClick && (
                    <>
                      <BigImage
                        style={{
                          backgroundImage: `linear-gradient(to top,black, transparent), url(${makeImagePath(
                            topMovieClick.backdrop_path,
                            'w500'
                          )})`,
                        }}
                      />
                      <BigTitle>{topMovieClick.title}</BigTitle>
                      <BigOverView>{topMovieClick.overview}</BigOverView>
                      <BigDate>{topMovieClick.release_date}</BigDate>
                    </>
                  )} */}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
