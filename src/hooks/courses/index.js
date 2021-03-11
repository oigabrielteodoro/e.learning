import React, { createContext, useState, useCallback, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

const CoursesContext = createContext({});

const CoursesProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadStorageData() {
      const storagedCourses = await AsyncStorage.getItem('@E-learning:courses');

      if (storagedCourses) {
        const parsedCourses = JSON.parse(storagedCourses);
        
        setData(parsedCourses);
      }
    }

    loadStorageData();
  }, []);

  const updateCourses = useCallback(async courseToAdd => {
    const foundedCourse = data.find(course => course.id === courseToAdd.id);

    if (foundedCourse) {
      const courses = data.filter(course => course.id !== courseToAdd.id);

      setData(courses);

      await AsyncStorage.setItem('@E-learning:courses', JSON.stringify(courses));
    } else {
      const courses = [...data, courseToAdd];

      setData(courses);

      await AsyncStorage.setItem('@E-learning:courses', JSON.stringify(courses));
    }
  }, [data]);

  return (
    <CoursesContext.Provider value={{ courses: data, updateCourses }}>
      {children}
    </CoursesContext.Provider>
  );
}

function useCourses() {
  const context = useContext(CoursesContext);

  if (!context) {
    throw new Error('useCourses must be used within an CoursesProvider');
  }

  return context;
}

export { CoursesProvider, useCourses };