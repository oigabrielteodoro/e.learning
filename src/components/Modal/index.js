import React, { useRef, useState, useCallback } from 'react';

import { Modal } from 'react-native';

import { Overlay, Container } from './styles';

const ModalComponent = ({ children, onCancel }) => {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(true);

  const handleCancel = () => {
    setIsVisible(false);

    onCancel();
  }

  const handleOverlayClick = useCallback((event) => {
    if (event.target === ref.current) {
      handleCancel();
    }
  }, [handleCancel]);

  return (
    <Modal 
      transparent
      visible={isVisible}
      animationType="fade"
    >
      <Overlay ref={ref} onTouchEnd={handleOverlayClick}>
        <Container>
          {children}
        </Container>
      </Overlay>
    </Modal>
  );
}

export default ModalComponent;