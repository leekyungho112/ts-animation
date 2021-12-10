import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getPopularTv, getTopRatedTv, getTv, IGetTv } from '../api';
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

const Slide = styled.div`
  position: relative;
  top: -100px;
`;
const PopSlide = styled.div`
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

const rowVariants = {
  hidden: { x: window.outerWidth - 5 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth + 5 },
};
const offset = 6;

const Tv = () => {
  const { data, isLoading } = useQuery<IGetTv>(['tv', 'today'], getTv);
  const { data: popTvData, isLoading: popTvLoading } = useQuery<IGetTv>(
    ['tv', 'popular'],
    getPopularTv
  );
  const { data: topTvData, isLoading: topTvLoading } = useQuery<IGetTv>(
    ['tv', 'topRate'],
    getTopRatedTv
  );
  const [todayIndex, setTodayIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseToday = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalTv = data?.results.length - 2;
      const maxIndex = Math.floor(totalTv / offset) - 1;
      setTodayIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}
            onClick={increaseToday}
          >
            <Title>{data?.results[0]?.name}</Title>
            <OverView>{data?.results[0]?.overview}</OverView>
          </Banner>

          <Slide>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={todayIndex}
              >
                {data?.results
                  .slice(2)
                  .slice(offset * todayIndex, offset * todayIndex + offset)
                  .map((tv) => (
                    <Box
                      key={tv.id}
                      bgPhoto={
                        tv.backdrop_path
                          ? makeImagePath(tv.backdrop_path, 'w500')
                          : makeImagePath(tv.poster_path, 'w500')
                      }
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </Slide>
          <PopSlide>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={todayIndex}
              >
                {popTvData?.results
                  .slice(2)
                  .slice(offset * todayIndex, offset * todayIndex + offset)
                  .map((tv) => (
                    <Box
                      key={tv.id}
                      bgPhoto={
                        tv.backdrop_path
                          ? makeImagePath(tv.backdrop_path, 'w500')
                          : makeImagePath(tv.poster_path, 'w500')
                      }
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </PopSlide>
          <TopSlide>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={todayIndex}
              >
                {topTvData?.results
                  .slice(2)
                  .slice(offset * todayIndex, offset * todayIndex + offset)
                  .map((tv) => (
                    <Box
                      key={tv.id}
                      bgPhoto={
                        tv.backdrop_path
                          ? makeImagePath(tv.backdrop_path, 'w500')
                          : makeImagePath(tv.poster_path, 'w500')
                      }
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </TopSlide>
        </>
      )}
    </Wrapper>
  );
};

export default Tv;
