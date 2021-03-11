import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { CoursesProvider } from './courses';

const AppProvider = ({ children }) => {
  return (
    <CoursesProvider>
      <ToastProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ToastProvider>
    </CoursesProvider>
  );
}

export default AppProvider;
