import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #6548A3;

  display: flex;
  flex: 1;
`;

export const Content = styled.View`
  background: #F0EDF5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  padding: 24px;

  display: flex;
  flex: 1;
`;

export const Title = styled.Text`
  color: #3d3d4c;
  font-family: 'Rubik-Regular';
  font-size: 20px;
`;

export const CategoriesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MyCoursesText = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Regular';
  color: #A0A0B2;
`;