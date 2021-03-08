import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import MyCourses from '../pages/MyCourses';

import { IconWrapper, NavigationBarButton } from './styles';

const Tab = createBottomTabNavigator();

const icons = {
  Home: 'home',
  MyCourses: 'hearto',
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            const name = icons[route.name];

            return (
              <IconWrapper focused={focused}>
                <Icon name={name} size={size} color={color} />
              </IconWrapper>
            )
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#fff',
          },
          activeTintColor: '#FF6680',
          inactiveTintColor: '#c4c4d1',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
          }}
        />
        <Tab.Screen
          name="MyCourses"
          component={MyCourses}
          options={{
            title: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;