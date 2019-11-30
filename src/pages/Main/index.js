import PropTypes from 'prop-types';
import React, { useState } from 'react';
import logo from '~/assets/s.png';
import api from '~/services/api';
import {
  ActivityIndicator,
  CityButton,
  CityButtonText,
  Container,
  ImageLogo,
  Input,
  List,
  MainText,
  SearchButton,
  TextButton,
} from './styles';

export default function Main({ navigation }) {
  const [queryCity, setQueryCity] = useState('');
  const [city, setCity] = useState();
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState(false);

  async function handleSearchCity() {
    SetLoading(true);
    try {
      const response = await api.get(`search/?query=${queryCity}`);

      if (response.data.length === 0) {
        throw error;
      }

      setCity(response.data);
      SetError(false);
    } catch (err) {
      SetError(true);
      SetLoading(false);
      setCity([]);
      setQueryCity('');
    } finally {
      SetLoading(false);
      setQueryCity('');
    }
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
        placeholder="Search any city in the world"
        returnKeyType="send"
        onSubmitEditing={handleSearchCity}
        value={queryCity}
        onChangeText={setQueryCity}
        error={error}
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

Main.navigationOptions = {
  title: 'GO Weather',
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
