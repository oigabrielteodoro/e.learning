import React from 'react';

import { CoursesProvider } from './courses';

const AppProvider = ({ children }) => {
  return (
    <CoursesProvider>
      {children}
    </CoursesProvider>
  );
}

export default AppProvider;