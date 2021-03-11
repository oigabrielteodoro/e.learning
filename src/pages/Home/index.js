import React, { useState, useCallback } from 'react';

import { Platform, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

import Header from '../../components/Header';

import { useCourses } from '../../hooks/courses';

import { courses } from '../../constants/courses';

import { 
  Wrapper, 
  Content, 
  CategoriesWrapper, 
  Title, 
  CoursesText, 
  CoursesList, 
  CourseItem, 
  CourseItemTitle, 
  CourseItemDetails, 
  CourseItemLessonsText 
} from './styles';
import { useToast } from '../../hooks/toast';

const Home = () => {
  const { addToast } = useToast();
  const { updateCourses } = useCourses();

  const [sendedToast, setSendedToast] = useState(false);

  const handleAddCourse = useCallback((course) => {
    updateCourses(course);

    if (!sendedToast) {
      addToast({
        title: 'Adicionado com sucesso',
        type: 'info',
      });
  
      setSendedToast(true);
  
      setTimeout(() => {
        setSendedToast(false);
      }, 3000);
    }
  }, [updateCourses, sendedToast]);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      enabled
    >
      <ScrollView 
        horizontal
        keyboardShouldPersistTaps="handled" 
        contentContainerStyle={{ flex: 1 }} 
        showsVerticalScrollIndicator={false}
      >
        <Wrapper>
          <Header />
          <Content>
            <CategoriesWrapper>
              <Title>Categorias</Title>

              <CoursesText>{courses.length} cursos</CoursesText>
            </CategoriesWrapper>

            <CoursesList 
              data={courses} 
              numColumns={2}
              keyExtractor={course => course.id} 
              renderItem={({ item: course }) => (
                <CourseItem onPress={() => handleAddCourse(course)}>
                  <Image source={course.iconPath} />
              
                  <CourseItemDetails>
                    <CourseItemTitle>{course.name}</CourseItemTitle>
                    <CourseItemLessonsText>{course.lessons} aulas</CourseItemLessonsText>
                  </CourseItemDetails>
                </CourseItem>
              )} 
            />
          </Content>
        </Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Home;