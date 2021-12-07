import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ISearchResult, searchAll } from '../api';
import { makeImagePath } from '../utils';
import noPoster from '../assets/noPosterSmall.png';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  background-color: black;
  margin: 100px 0px;
  width: 100%;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 60px;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  width: 300px;
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  margin-bottom: 5px;

  &:nth-child(4n-3) {
    transform-origin: center left;
  }

  &:nth-child(4n) {
    transform-origin: center right;
  }
`;

const MediaType = styled.div`
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`;
const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.darker};
  opacity: 0;
  position: absolute;
  width: 300px;
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
    scale: 1.3,
    y: -30,
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
interface SearchProps {
  search: string;
}

const Search = () => {
  const location = useLocation() as SearchProps;
  const keyword = new URLSearchParams(location.search).get('keyword');
  const { data, isLoading } = useQuery<ISearchResult>(['search', keyword], () =>
    searchAll(keyword)
  );
  console.log(data);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <BoxContainer>
          {data?.results.map((search) => (
            <Box
              initial="normal"
              whileHover="hover"
              variants={boxVariants}
              key={search.id}
              bgPhoto={
                search.backdrop_path
                  ? makeImagePath(search.backdrop_path, 'w500')
                  : noPoster
              }
            >
              <MediaType>
                {' '}
                <span>{search.media_type}</span>
              </MediaType>
              <Info variants={infoVariants}>
                <h4>{search.title ? search.title : search.name}</h4>
              </Info>
            </Box>
          ))}
        </BoxContainer>
      )}
    </Wrapper>
  );
};

export default Search;
