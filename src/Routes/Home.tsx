import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { allTrending, ITrendResult } from '../api';
import { makeImagePath } from '../utils';
import { useNavigate, useMatch, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import Detail from '../Components/Detail';

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 30px;
  /* overflow: hidden; */
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 7px;
  width: 80vw;
  height: 85vh;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
  background-color: red;
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
  &:first-child,
  :nth-child(3),
  :nth-child(5),
  :nth-child(8),
  :last-child {
    grid-column: span 2;
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
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow-y: scroll;
`;

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

const Home = () => {
  const navigate = useNavigate();
  const movieMatch = useMatch('/movie/:movieId');
  const tvMatch = useMatch('/tv/:tvId');
  const { scrollY } = useViewportScroll();
  const { data, isLoading } = useQuery<ITrendResult>('trend', allTrending);
  const onClickId = (itemId: number, media: string) => {
    if (media === 'movie') {
      navigate(`/movie/${itemId}`);
    } else {
      navigate(`/tv/${itemId}`);
    }
  };
  const onOverlayClick = () => navigate('/');
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <MainBox>
            {data?.results.slice(0, 10).map((item) => (
              <Box
                whileHover={{ scale: 1.4 }}
                key={item.id}
                onClick={() => onClickId(item.id, item.media_type)}
                bgPhoto={makeImagePath(item.backdrop_path, 'w500')}
                layoutId={item.id + ''}
              >
                {item.title ? item.title : item.name}
              </Box>
            ))}
          </MainBox>
          <AnimatePresence>
            {movieMatch ? (
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BigMovie
                  style={{
                    top: scrollY.get() + 100,
                    bottom: scrollY.get() + 100,
                  }}
                  layoutId={movieMatch.params.movieId}
                >
                  <Detail />
                </BigMovie>
              </Overlay>
            ) : null}
            {tvMatch ? (
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BigMovie
                  style={{
                    top: scrollY.get() + 100,
                    bottom: scrollY.get() + 100,
                  }}
                  layoutId={tvMatch.params.tvId}
                >
                  <Detail />
                </BigMovie>
              </Overlay>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
