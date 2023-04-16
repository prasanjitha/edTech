import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroOne from '../screens/IntroOne';
import IntroTwo from '../screens/IntroTwo';
import IntroThree from '../screens/IntroThree';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function AuthNavigation(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            {/* <Stack.Screen name='SplashScreen' component={SplashScreen} /> */}
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='IntroOne' component={IntroOne} />
            <Stack.Screen name='IntroTwo' component={IntroTwo} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='IntroThree' component={IntroThree} />
        </Stack.Navigator>
    );
}

export default AuthNavigation;