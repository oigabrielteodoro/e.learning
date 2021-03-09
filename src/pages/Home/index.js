import React from 'react';

import { Platform, KeyboardAvoidingView, ScrollView } from 'react-native';

import Header from '../../components/Header';

import { Wrapper, Content, CategoriesWrapper, Title, MyCoursesText } from './styles';

const Home = () => {
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      enabled
    >
      <ScrollView 
        keyboardShouldPersistTaps="handled" 
        contentContainerStyle={{ flex: 1 }} 
        showsVerticalScrollIndicator={false}
      >
        <Wrapper>
          <Header />
          <Content>
            <CategoriesWrapper>
              <Title>Categorias</Title>

              <MyCoursesText>43 cursos</MyCoursesText>
            </CategoriesWrapper>
          </Content>
        </Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Home;