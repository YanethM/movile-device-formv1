import React from 'react';
import {Modal, Text} from 'react-native';

export const Form = ({modalVisibleForm}) => {
  return (
    <Modal animationType="slide" visible={modalVisibleForm}>
      <Text>Formulario de registro</Text>
    </Modal>
  );
};
