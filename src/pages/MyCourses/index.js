import React, { useCallback, useState } from 'react';

import { Platform, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import { useCourses } from '../../hooks/courses';

import { 
  Wrapper, 
  Content, 
  CategoriesWrapper, 
  Title, 
  CoursesList, 
  CourseItem, 
  CourseItemTitle, 
  CourseItemDetails, 
  CourseItemLessonsText,
  CurseItemDelete
} from './styles';

const MyCourses = () => {
  const { courses, updateCourses } = useCourses();

  const handleDelete = useCallback((course) => {
    updateCourses(course);
  }, [updateCourses]);

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
              <Title>Cursos salvos</Title>
            </CategoriesWrapper>

            <CoursesList 
              data={courses} 
              numColumns={2}
              vertical
              keyExtractor={course => course.id} 
              renderItem={({ item: course }) => (
                <CourseItem>
                  <Image source={course.iconPath} />

                  <CurseItemDelete onPress={() => handleDelete(course)}>
                    <Icon name="trash" size={24} color="#c4c4d1" />
                  </CurseItemDelete>
              
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

export default MyCourses;