import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getMovies, IGetMoviesResult, topMovies, upcomingMovie } from '../api';
import { makeImagePath } from '../utils';
import { useNavigate, useMatch } from 'react-router-dom';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import noPoster from '../assets/noPosterSmall.png';
import Detail from '../Components/Detail';
import { Helmet } from 'react-helmet';
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
  margin-top: 300px;
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
  border-radius: 5px;
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
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
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
  overflow-y: scroll;
  left: 0;
  right: 0;
  margin: 0 auto;
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

const Movie = () => {
  const navigate = useNavigate();
  const bigMovieMatch = useMatch('/movies/:movieId');
  console.log(bigMovieMatch);
  const { scrollY } = useViewportScroll();
  const { data, isLoading: nowLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies
  );
  const { data: topMovieData, isLoading: topMovieLoading } =
    useQuery<IGetMoviesResult>(['movie', 'topMovie'], topMovies);
  const { data: upcomingData, isLoading: upcomingLoading } =
    useQuery<IGetMoviesResult>(['movie', 'upcoming'], upcomingMovie);

  const [index, setIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);
  const [upIndex, setUpIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const upInCreseIndex = () => {
    if (upcomingData) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = upcomingData?.results.length - 2;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setUpIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const topIncreseIndex = () => {
    if (topMovieData) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = topMovieData?.results.length - 2;

      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setTopIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  const onOverlayClick = () => navigate(-1);

  const isLoading = nowLoading || topMovieLoading || upcomingLoading;
  return (
    <Wrapper>
      <Helmet>
        <title>Movies | Netflix</title>
      </Helmet>
      {isLoading ? (
        <Loader>Loading....</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0]?.title}</Title>
            <OverView>{data?.results[0]?.overview}</OverView>
          </Banner>
          <Slider>
            <h1>{`Now Playing Movie (${offset * index + offset})`}</h1>
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
                      layoutId={`now_${movie.id}`}
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
            <h1>{`UP-coming Movie (${offset * upIndex + offset})`}</h1>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={upIndex}
              >
                {upcomingData?.results
                  .slice(2)
                  .slice(offset * upIndex, offset * upIndex + offset)
                  .map((movie) => (
                    <Box
                      layoutId={`upcoming_${movie.id}`}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                      bgPhoto={
                        movie.backdrop_path
                          ? makeImagePath(movie.backdrop_path, 'w500')
                          : noPoster
                      }
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
            <ArrowBtn onClick={upInCreseIndex}>
              <IoArrowForward style={{ fontSize: 30 }} />
            </ArrowBtn>
          </UpcomingSlide>
          <TopSlide>
            <h1>{`TOP Rated Movie (${offset * topIndex + offset})`}</h1>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={topIndex}
              >
                {topMovieData?.results
                  .slice(2)
                  .slice(offset * topIndex, offset * topIndex + offset)
                  .map((movie) => (
                    <Box
                      layoutId={`top_${movie.id}`}
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
            <ArrowBtn onClick={topIncreseIndex}>
              <IoArrowForward style={{ fontSize: 30 }} />
            </ArrowBtn>
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
                  <Detail />
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};

export default Movie;
