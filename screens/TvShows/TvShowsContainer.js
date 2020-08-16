import * as React from "react";
import { tvApi } from "../../api";
import TvShowsPresenter from "./TvShowsPresenter";

export default () => {
  const [tvShows, setTvShows] = React.useState({
    loading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setTvShows({
      loading: false,
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
    });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return <TvShowsPresenter refreshFn={getData} {...tvShows}></TvShowsPresenter>;
};
