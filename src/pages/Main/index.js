import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/s.png';
import api from '~/services/api';

import {
  Container,
  ImageLogo,
  Input,
  MainText,
  SearchButton,
  TextButton,
  List,
} from './styles';

export default function Main({ navigation }) {
  const [queryCity, setqueryCity] = useState('');
  const [city, setCity] = useState(['']);

  async function handleSearchCity() {
    // console.tron.log(this.state.newUser);
    const response = await api.get(`?query=${queryCity}`);
    setCity([response.data]);
    console.tron.log(city);
  }

  function handleNavigate(cityData) {
    navigation.navigate('Forecast', { cityData });
  }

  return (
    <Container>
      <ImageLogo source={logo} />
      <MainText>GOAL Weather</MainText>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search City"
        returnKeyType="send"
        onSubmitEditing={handleSearchCity}
        value={queryCity}
        onChangeText={setqueryCity}
      />
      <SearchButton onPress={handleSearchCity}>
        <TextButton>Search a City</TextButton>
      </SearchButton>

      <List
        data={city[0]}
        keyExtractor={citys => citys.woeid}
        renderItem={({ item }) => (
          // <ProfileButton onPress={() => this.handleNavigate(item)}>
          <Text onPress={() => handleNavigate(item)}>{item.title}</Text>
        )}
      />
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
