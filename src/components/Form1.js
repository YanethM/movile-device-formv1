import React from 'react';
import {Modal, SafeAreaView, View, Text} from 'react-native';

export const Form1 = ({modalForm}) => {
  return (
    <Modal animationType='slide' visible={modalForm}>
      <SafeAreaView>
        <View>
          <Text>Formulario 1</Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
