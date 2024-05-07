import { useGetMoviesQuery } from "../store/movies/moviesSlice";
import { Movie } from "./../screens/movies";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { t, i18n } = useTranslation();
  const { data, error, isLoading, isError } = useGetMoviesQuery({
    page: page,
    local:i18n.language
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