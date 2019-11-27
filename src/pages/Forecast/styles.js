import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #eee;
`;

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const List = styled.FlatList``;

export const CityTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const TempNow = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-top: 20px;
  padding-right: 30px;
  color: #333;
`;

export const TempNowIcon = styled.Image``;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top: 20px;
  align-content: center;
`;

export const WeatherForecast = styled.View`
  height: 250px;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border: 3px solid #333;
`;
export const ForecastOfDay = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  border-bottom-width: 1px;
`;

export const TempDate = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const TempDayMax = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
export const TempDayMin = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Label = styled.Text`
  color: red;
`;

export const ContainerTemp = styled.View`
  flex-direction: row;
`;

export const TempView = styled.View`
  flex-direction: column;
  margin: 0 10px;
`;

export const TempIcon = styled.Image``;
