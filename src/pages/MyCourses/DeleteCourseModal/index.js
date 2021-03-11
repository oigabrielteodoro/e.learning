import React, { useCallback } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import Modal from '../../../components/Modal';
import { useCourses } from '../../../hooks/courses';

import { Container, Message, ModalButtons, CancelButton, CancelButtonText, AcceptButton, AcceptButtonText } from './styles';

const DeleteCourseModal = ({ course, onCancel }) => {
  const { updateCourses } = useCourses();
  
  const handleDelete = useCallback(() => {
    updateCourses(course);

    onCancel();
  }, [updateCourses, course, onCancel]);

  return (
    <Modal onCancel={onCancel}>
      <Container>
        <Icon size={55} color="#ff6680" name="trash" />

        <Message>Quer excluir suas aulas de {course.name}?</Message>

        <ModalButtons>
          <CancelButton>
            <CancelButtonText onPress={onCancel}>
              Não!
            </CancelButtonText>
          </CancelButton>
          <AcceptButton onPress={handleDelete}>
            <AcceptButtonText>Com certeza</AcceptButtonText>
          </AcceptButton>
        </ModalButtons>
      </Container>
    </Modal>
  );
}

export default DeleteCourseModal;