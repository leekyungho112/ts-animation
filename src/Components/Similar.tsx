import { motion } from 'framer-motion';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { IGetMoviesResult, similarMovie } from '../api';
import { makeImagePath } from '../utils';
import noPoster from '../assets/noPosterSmall.png';
import { useParams } from 'react-router-dom';
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.theme.black.darker};
  gap: 10px;
  padding: 10px;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:nth-child(odd) {
    transform-origin: center left;
  }
  &:nth-child(even) {
    transform-origin: center right;
  }
`;

interface ParamsProp {
  movieId: string;
}
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
interface RouteParams {
  movieId: string;
}
const Similar = () => {
  const { movieId } = useParams() as RouteParams;
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movie', 'similar'],
    () => similarMovie(movieId)
  );

  return (
    <Container>
      {isLoading
        ? 'loading,,,'
        : data?.results.map((movie) => (
            <Box
              variants={boxVariants}
              initial="normal"
              whileHover="hover"
              key={movie.id}
              bgPhoto={
                movie.backdrop_path
                  ? makeImagePath(movie.backdrop_path, 'w500')
                  : noPoster
              }
            >
              {movie.title}
            </Box>
          ))}
    </Container>
  );
};

export default Similar;
