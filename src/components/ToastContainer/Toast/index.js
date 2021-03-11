import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useToast } from '../../../hooks/toast';

import { Container, Information, Title, CloseButton } from './styles';

const icons = {
  info: <Icon name="info" size={24} color="#fff" />,
  error: <Icon name="alert-circle" size={24} color="#fff" />,
  success: <Icon name="check-circle" size={24} color="#fff" />,
  warning: <Icon name="alert-triangle" size={24} color="#fff" />,
};

const Toast = ({ id, type, title }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container type={type}>
      {icons[type || 'info']}

      <Information>
        <Title>{title}</Title>
      </Information>

      <CloseButton onPress={() => removeToast(id)}>
        <Icon size={18} name="x" color="#fff" />
      </CloseButton>
    </Container>
  );
};

export default Toast;
