import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './src/components/Screen';
import SplashScreen from './src/screens/SplashScreen';
import IntroOne from './src/screens/IntroOne';
import IntroTwo from './src/screens/IntroTwo';
import IntroThree from './src/screens/IntroThree';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/navigations/AuthNavigation';
import MainTabNavigator from './src/navigations/MainTabNavigator';
import WdNavigationTheme from './src/navigations/WdNavigationTheme';
import SearchScreen from './src/screens/SearchScreen';
import CourseDetails from './src/screens/CourseDetails';

export default function App() {
  return (

    <NavigationContainer theme={WdNavigationTheme}>
      <CourseDetails />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
});
