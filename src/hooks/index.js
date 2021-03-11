import React from 'react';

import { ToastProvider } from './toast';
import { CoursesProvider } from './courses';

const AppProvider = ({ children }) => {
  return (
    <CoursesProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </CoursesProvider>
  );
}

export default AppProvider;
