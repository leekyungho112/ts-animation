const API_KEY = 'afd07a29753271380c387af2799cf64e';
const BASE_PATH = 'https://api.themoviedb.org/3';
interface IMovie {
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  title: string;
  release_date?: string;
  vote_average?: number;
  name?: string;
  media_type?: string;
}
interface ITv {
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  name: string;
  release_date?: string;
}
interface IGenres {
  id: number;
  name: string;
}
interface ICompanies {
  id: number;
  name: string;
  logo_path: string;
}
export interface IGetMovieDetail {
  adult: boolean;
  backdrop_path: string;
  genres: IGenres[];
  homepage: string;
  id: string;
  production_companies: ICompanies[];
  title: string;
  vote_average: number;
  overview: string;
  runtime: number;
}

export interface IGetMoviesResult {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetTv {
  page: number;
  results: ITv[];
  total_pages: number;
  total_results: number;
}

export interface ISearchResult {
  page: number;
  results: IMovie[];
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=2`
  ).then((response) => response.json());
}

export function topMovies() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}
export function upcomingMovie() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}
export function getMovieDetail(movieId: string) {
  return fetch(
    `${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}
export function similarMovie(movieId: string) {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/similar?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}

export function getTv() {
  return fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}

export function searchAll(keyword: string | null) {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko-KR&query=${keyword}`
  ).then((response) => response.json());
}
