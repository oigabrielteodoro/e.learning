import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import MyCourses from '../pages/MyCourses';

import SignIn from '../pages/SignIn';

import { IconWrapper } from './styles';
import { useAuth } from '../hooks/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  Home: 'home',
  MyCourses: 'hearto',
}

const Routes = () => {
  const { isSigned } = useAuth();

  return (
    <NavigationContainer>
      {isSigned ? (

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
      ) : (
        <Stack.Navigator 
          initialRouteName="SignIn"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen 
            name="SignIn"
            component={SignIn}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;