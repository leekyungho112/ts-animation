import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getMovieDetail, IGetMovieDetail, IGetMoviesResult } from '../api';
import { makeImagePath } from '../utils';
import Similar from './Similar';
import noPoster from '../assets/noPosterSmall.png';
interface ParamsProp {
  movieId: string;
}
const Container = styled.div``;
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
const Detail = ({ movieId }: ParamsProp) => {
  console.log(movieId);
  const { data, isLoading } = useQuery<IGetMovieDetail>(
    ['movie', 'Detail'],
    () => getMovieDetail(movieId)
  );

  return (
    <Container>
      <BigImage
        style={{
          backgroundImage: `linear-gradient(to top,black, transparent), url(${makeImagePath(
            data ? data?.backdrop_path : noPoster,
            'w500'
          )})`,
        }}
      />
      <BigTitle>{data?.title}</BigTitle>
      <BigOverView>{data?.overview}</BigOverView>
      <Similar movieId={movieId} />
    </Container>
  );
};

export default Detail;
