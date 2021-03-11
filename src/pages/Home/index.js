import React from 'react';

import { Platform, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

import Header from '../../components/Header';

import { courses } from '../../constants/courses';

import { Wrapper, Content, CategoriesWrapper, Title, CoursesText, CoursesList, CourseItem, CourseItemTitle, CourseItemDetails, CourseItemLessonsText } from './styles';

const Home = () => {
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

              <CoursesText>43 cursos</CoursesText>
            </CategoriesWrapper>

            <CoursesList 
              data={courses} 
              numColumns={2}
              keyExtractor={course => course.id} 
              renderItem={({ item: course }) => (
                <CourseItem>
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