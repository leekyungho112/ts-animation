import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { ISearchResult, searchAll } from '../api';
import { makeImagePath } from '../utils';
import noPoster from '../assets/noPosterSmall.png';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import Detail from '../Components/Detail';
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
  margin-bottom: 20px;

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
  const navigate = useNavigate();
  const movieMatch = useMatch('/search/movies/:movieId');
  console.log(movieMatch);
  const tvMatch = useMatch('/search/tv/:tvId');
  console.log(tvMatch);
  const { scrollY } = useViewportScroll();
  const location = useLocation() as SearchProps;
  const keyword = new URLSearchParams(location.search).get('keyword');
  const { data, isLoading } = useQuery<ISearchResult>(['search', keyword], () =>
    searchAll(keyword)
  );
  const onClickBox = (mediaType: string, searchId: number) => {
    console.log(mediaType);
    if (mediaType === 'movie') {
      navigate(`/search/movies/${searchId}`);
    } else {
      navigate(`/search/tv/${searchId}`);
    }
  };
  const onOverlayClick = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <BoxContainer>
            {data?.results.map((search) => (
              <AnimatePresence>
                <Box
                  initial="normal"
                  whileHover="hover"
                  variants={boxVariants}
                  key={search.id}
                  onClick={() => onClickBox(search.media_type, search.id)}
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
              </AnimatePresence>
            ))}
          </BoxContainer>
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

export default Search;
