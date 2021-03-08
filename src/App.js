import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import Navigation from './routes';

Icon.loadFont();

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;