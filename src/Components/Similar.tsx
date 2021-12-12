import { motion } from 'framer-motion';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { IGetMoviesResult, similarMovie, similarTv } from '../api';
import { makeImagePath } from '../utils';
import noPoster from '../assets/noPosterSmall.png';
import { useParams } from 'react-router-dom';
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.theme.black.darker};
  gap: 10px;
  padding: 20px;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  position: relative;
  &:nth-child(odd) {
    transform-origin: center left;
  }
  &:nth-child(even) {
    transform-origin: center right;
  }
`;
const SimilarTitle = styled.h2`
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
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

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -30,
    zIndex: 99,
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
interface RouteParams {
  movieId: string;
  tvId: string;
}
const Similar = () => {
  const { movieId, tvId } = useParams() as RouteParams;
  const { data, isLoading } = useQuery<IGetMoviesResult>('similar', () =>
    movieId ? similarMovie(movieId) : similarTv(tvId)
  );

  return (
    <>
      <SimilarTitle>비슷한 콘텐츠</SimilarTitle>
      <Container>
        {isLoading
          ? 'loading,,,'
          : data?.results.map((movie) => (
              <Box
                variants={boxVariants}
                initial="normal"
                whileHover="hover"
                key={movie.id}
                transition={{ type: 'tween' }}
                bgPhoto={
                  movie.backdrop_path
                    ? makeImagePath(movie.backdrop_path, 'w500')
                    : noPoster
                }
              >
                <Info variants={infoVariants}>
                  <h4>{movie.title ? movie.title : movie.name}</h4>
                </Info>
              </Box>
            ))}
      </Container>
    </>
  );
};

export default Similar;
