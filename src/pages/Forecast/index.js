import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { api, apiIcons } from '~/services/api';

import {
  CityTitle,
  Container,
  TempNow,
  ActivityIndicator,
  WeatherForecast,
  ForecastOfDay,
  TempDate,
  TempDayMax,
  TempDayMin,
  TempIcon,
  List,
  TempView,
  Header,
  TempNowIcon,
  Label,
  ContainerTemp,
} from './styles';

export default function Forecast({ navigation }) {
  const [cityState, setCityState] = useState();
  const [tempNow, setTempNow] = useState(0);
  const [tempNowIcon, setTempNowIcon] = useState('');
  const [tempIconUri, setTempIconUri] = useState('');
  const [loading, setLoading] = useState(false);

  const idNavigation = navigation.state.params.cityData.woeid;

  const cityTitle = navigation.state.params.cityData.title;

  async function loadCityData(cityID) {
    setLoading(true);
    const response = await api.get(`${cityID}`);

    const data = [response.data.consolidated_weather];
    console.tron.log(data[0]);

    setCityState(response.data);

    setLoading(false);
  }

  async function setIcon(iconID) {
    setTempNowIcon(
      `https://www.metaweather.com/static/img/weather/png/64/${iconID}.png`
    );
  }

  useEffect(() => {
    if (cityState) {
      setTempNow(cityState.consolidated_weather[0].the_temp);
      setIcon(cityState.consolidated_weather[0].weather_state_abbr);
    }
  }, [cityState, tempNow]);

  useEffect(() => {
    if (idNavigation) {
      loadCityData(idNavigation);
    }
    setTempIconUri('https://www.metaweather.com/static/img/weather/png/64/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <CityTitle>{cityTitle}</CityTitle>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Header>
          <TempNow>{tempNow.toFixed(0)}°</TempNow>
          <TempNowIcon
            source={{
              uri: tempNowIcon,
            }}
            style={{ width: 60, height: 60 }}
          />
        </Header>
      )}
      {cityState && (
        <List
          vertical
          data={cityState.consolidated_weather}
          keyExtractor={city => city.woeid}
          renderItem={({ item }) => (
            <ForecastOfDay>
              <TempDate>{item.applicable_date}</TempDate>

              <ContainerTemp>
                <TempView>
                  <Label>min</Label>
                  <TempDayMin>{item.min_temp.toFixed(0)}°</TempDayMin>
                </TempView>
                <TempView>
                  <Label>max</Label>
                  <TempDayMax>{item.max_temp.toFixed(0)}°</TempDayMax>
                </TempView>
              </ContainerTemp>

              <TempIcon
                source={{
                  uri: `${tempIconUri}${item.weather_state_abbr}.png`,
                }}
                style={{ width: 45, height: 45 }}
              />
            </ForecastOfDay>
          )}
        />
      )}
    </Container>
  );
}
Forecast.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
