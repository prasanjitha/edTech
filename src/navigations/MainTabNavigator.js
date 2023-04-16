import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function MainTabNavigator(props) {
    return (
        <Tab.Navigator >
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='book' color={color} size={size} />,
            }} name='Courses' component={CoursesScreen} />
            <Tab.Screen options={{
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account-circle' color={color} size={size} />,
            }} name='Profile' component={ProfileScreen} />
            <Tab.Screen options={{
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='format-list-bulleted' color={color} size={size} />,
            }} name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    );
}


export default MainTabNavigator;