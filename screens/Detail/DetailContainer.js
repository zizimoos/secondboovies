import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

const DetailContainer = ({
  navigation,
  route: {
    params: {
      id,
      title,
      votes,
      poster,
      overview,
      releaseDate,
      backgroundImage,
      refreshFn,
      loading,
    },
  },
}) => {
  const [movie, setMovie] = useState({
    title,
    votes,
    poster,
    overview,
    releaseDate,
    backgroundImage,
    refreshFn,
    loading,
  });
  const getData = async () => {
    const [movieDetail, movieDetailError] = await movieApi.movie(id);
    const [showDetail, showDetailError] = await tvApi.show(id);
    setMovie({
      ...movieDetail,
      title: movieDetail.title,
      backgroundImage: movieDetail.backdrop_path,
      poster: movieDetail.poster_path,
      overview: movieDetail.overview,
      votes: movieDetail.vote_average,
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return <DetailPresenter {...movie}></DetailPresenter>;
};

export default DetailContainer;
