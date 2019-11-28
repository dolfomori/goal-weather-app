import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const ImageLogo = styled.Image`
  margin-top: 50px;
  width: 70px;
  height: 70px;
`;

export const MainText = styled.Text`
  color: #fa7021;
  font-size: 40px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 50px;
  height: 40px;
  width: 100%;
  background: #eee;
  border-radius: 4px;
  font-size: 20px;
  border: 1px solid ${props => (props.error ? 'red' : '#eee')};
  color: #999;
`;

export const SearchButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fa7021;
  color: white;
  border-radius: 4px;
  margin-top: 10px;
  height: 40px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const CityButton = styled(RectButton)`
  padding: 20px;
  background-color: #f4f4f4;
  margin-top: 10px;
`;

export const CityButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fa7021;
  text-align: center;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top: 20px;
  align-content: center;
`;
