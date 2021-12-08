import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getTv, IGetTv } from '../api';
import { makeImagePath } from '../utils';
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

const Tv = () => {
  const { data, isLoading } = useQuery<IGetTv>(['tv', 'today'], getTv);
  console.log(data);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
          <Title>{data?.results[0]?.name}</Title>
          <OverView>{data?.results[0]?.overview}</OverView>
        </Banner>
      )}
    </Wrapper>
  );
};

export default Tv;
