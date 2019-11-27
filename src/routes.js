import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Forecast from './pages/Forecast';

export default createAppContainer(
  createStackNavigator(
    {
      Main,
      Forecast,
    },
    {
      headerLayoutPreset: 'center',
      // headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#fa7021',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);
