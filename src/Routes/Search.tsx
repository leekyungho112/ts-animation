import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ISearchResult, searchAll } from '../api';

const Wrapper = styled.div`
  background-color: black;
  padding-bottom: 200px;
`;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');
  const { data, isLoading } = useQuery<ISearchResult>('search', () =>
    searchAll(keyword)
  );

  return <Wrapper></Wrapper>;
};

export default Search;
