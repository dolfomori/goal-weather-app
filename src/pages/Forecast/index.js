import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { api } from '~/services/api';
import { convertDegrees, convertDate } from '~/util/format';
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
  SwitchTemp,
  SwitchTempText,
  ContainerSwitch,
} from './styles';

export default function Forecast({ navigation }) {
  const [cityState, setCityState] = useState();
  const [loading, setLoading] = useState(false);
  const [switchDegrees, setSwitchDegrees] = useState(true);
  const [degreesType, setDegreesType] = useState('Celsius');

  const idNavigation = navigation.state.params.cityData.woeid;
  const cityTitle = navigation.state.params.cityData.title;

  async function loadCityData(cityID) {
    setLoading(true);

    const response = await api.get(`${cityID}`);

    const localData = response.data.consolidated_weather.map(item => ({
      ...item,
      date_formatted: convertDate(item.applicable_date),
      min_temp_formatted: switchDegrees
        ? item.min_temp.toFixed(0)
        : convertDegrees(item.min_temp).toFixed(0),
      max_temp_formatted: switchDegrees
        ? item.max_temp.toFixed(0)
        : convertDegrees(item.max_temp).toFixed(0),
      the_temp_formatted: switchDegrees
        ? item.the_temp.toFixed(0)
        : convertDegrees(item.the_temp).toFixed(0),
      temp_icon_url: `https://www.metaweather.com/static/img/weather/png/64/${item.weather_state_abbr}.png`,
    }));

    setCityState(localData);

    setLoading(false);
  }

  useEffect(() => {
    if (switchDegrees) {
      setDegreesType('Celsius');
    } else {
      setDegreesType('Fahrennheit');
    }
  }, [switchDegrees]);

  useEffect(() => {
    if (cityState) {
      setInterval(() => {
        console.tron.log(cityState);
      }, 10000);
    }
  }, [cityState]);

  useEffect(() => {
    if (idNavigation) {
      loadCityData(idNavigation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchDegrees]);

  return (
    <Container>
      <CityTitle>{cityTitle}</CityTitle>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        cityState && (
          <Header>
            <TempNow>{cityState[0].the_temp_formatted}°</TempNow>
            <TempNowIcon
              source={{
                uri: cityState[0].temp_icon_url,
              }}
              style={{ width: 60, height: 60 }}
            />
          </Header>
        )
      )}
      {cityState && (
        <>
          <List
            vertical
            data={cityState}
            keyExtractor={city => city.id}
            renderItem={({ item, index }) => (
              <ForecastOfDay>
                <TempDate>
                  {index === 0 ? 'Today' : item.date_formatted}
                </TempDate>

                <ContainerTemp>
                  <TempView>
                    <Label>min</Label>
                    <TempDayMin>{item.min_temp_formatted}°</TempDayMin>
                  </TempView>
                  <TempView>
                    <Label>max</Label>
                    <TempDayMax>{item.max_temp_formatted}°</TempDayMax>
                  </TempView>
                </ContainerTemp>

                <TempIcon
                  source={{
                    uri: item.temp_icon_url,
                  }}
                  style={{ width: 45, height: 45 }}
                />
              </ForecastOfDay>
            )}
          />

          <ContainerSwitch>
            <SwitchTemp
              value={switchDegrees}
              onValueChange={setSwitchDegrees}
            />
            <SwitchTempText>{degreesType}</SwitchTempText>
          </ContainerSwitch>
        </>
      )}
    </Container>
  );
}
Forecast.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
