import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const List = styled.FlatList`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const CityTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
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

export const SwitchTemp = styled.Switch``;

export const SwitchTempText = styled.Text`
  font-size: 24px;
`;

export const ContainerSwitch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`;

export const ContainerMap = styled.View`
  height: 140px;
`;
