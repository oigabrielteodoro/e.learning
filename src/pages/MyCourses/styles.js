import styled from 'styled-components/native';

import { FlatList, View } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #6548A3;

  display: flex;
  flex: 1;
`;

export const Content = styled.View`
  background: #F0EDF5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

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

  padding: 24px 24px 0;
`;

export const CoursesText = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Regular';
  color: #A0A0B2;
`;

export const CoursesList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 12px;
  padding: 0 12px 12px;
`;

export const CourseItem = styled.View`
  background: #fff;
  border-radius: 16px;

  padding: 24px 25px;

  flex: 1;
  margin: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`;

export const CurseItemDelete = styled.TouchableOpacity`
  position: absolute;

  top: 14px;
  right: 14px;
`;

export const CourseItemDetails = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const CourseItemTitle = styled.Text`
  font-size: 20px;
  font-family: 'Rubik-Regular';
  color: #6c6c80;
`;

export const CourseItemLessonsText = styled.Text`
  color: #C4C4D1;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  margin-top: 4px;
`;