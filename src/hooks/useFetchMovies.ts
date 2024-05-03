import { useGetMoviesQuery } from "../store/movies/moviesSlice";
import { Movie } from "./../screens/movies";

import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const { data, error, isLoading, isError } = useGetMoviesQuery({
    page: page,
  });

  const loadMore = () => {
    setIsLoadMore(true);
    setPage(page + 1);
  };

  useEffect(() => {
    setIsLoadMore(false);
    if (data) {
      setMovies(movies.concat(data));
    }
  }, [data]);

  return {
    data: movies,
    isLoading,
    isError,
    isLoadMore,
    error,
    loadMore,
    page,
  };
};

export default useFetchMovies;
