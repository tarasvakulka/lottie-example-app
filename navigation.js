import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './containers/MainScreen';

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      initialRouteName: 'MainScreen',
    }
  }
);

export default createAppContainer(AppNavigator);
