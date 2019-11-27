import PropTypes from 'prop-types';
import React, { useState } from 'react';
import logo from '~/assets/s.png';
import { api, apiIcons } from '~/services/api';

import {
  CityButton,
  CityButtonText,
  Container,
  ImageLogo,
  Input,
  List,
  MainText,
  SearchButton,
  TextButton,
  ActivityIndicator,
} from './styles';

export default function Main({ navigation }) {
  const [queryCity, setQueryCity] = useState('');
  const [city, setCity] = useState();
  const [loading, SetLoading] = useState(false);

  async function handleSearchCity() {
    SetLoading(true);
    const response = await api.get(`search/?query=${queryCity}`);
    setCity(response.data);
    SetLoading(false);
  }

  function handleNavigate(cityData) {
    setCity('');
    setQueryCity('');
    navigation.navigate('Forecast', { cityData });
  }

  return (
    <Container>
      <ImageLogo source={logo} />
      <MainText>GOAL Weather</MainText>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Enter Any City In The World"
        returnKeyType="send"
        onSubmitEditing={handleSearchCity}
        value={queryCity}
        onChangeText={setQueryCity}
      />
      <SearchButton onPress={handleSearchCity}>
        <TextButton>Search</TextButton>
      </SearchButton>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <List
          data={city}
          keyExtractor={citys => citys.woeid}
          renderItem={({ item }) =>
            city && (
              <CityButton onPress={() => handleNavigate(item)}>
                <CityButtonText>{item.title}</CityButtonText>
              </CityButton>
            )
          }
        />
      )}
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
