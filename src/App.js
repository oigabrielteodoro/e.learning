import React from 'react';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

import Navigation from './routes';

Icon.loadFont();
IconFeather.loadFont();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6548A3" />

      <Navigation />
    </>
  );
}

export default App;