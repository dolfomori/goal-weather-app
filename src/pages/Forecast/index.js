import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { CityTitle, Container, TempNow, ActivityIndicator } from './styles';

export default function Forecast({ navigation }) {
  const [cityState, setCityState] = useState();
  const [tempNow, setTempNow] = useState(0);
  const [loading, setLoading] = useState(false);

  const idNavigation = navigation.state.params.cityData.woeid;

  const cityTitle = navigation.state.params.cityData.title;

  useEffect(() => {
    async function loadCityData() {
      setLoading(true);
      const response = await api.get(`${idNavigation}`);
      setCityState(response.data);
      setTempNow(cityState.consolidated_weather[0].the_temp);
      setLoading(false);
    }

    loadCityData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityState]);

  return (
    <Container>
      <CityTitle>{cityTitle}</CityTitle>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TempNow>{tempNow.toFixed(1)}°</TempNow>
      )}
    </Container>
  );
}
Forecast.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
