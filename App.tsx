import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable, Modal } from 'react-native';
import { Form } from './src/components/Form';

function App(): JSX.Element {
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisibleForm, setModalVisibleForm] = useState(false);

  console.log(modalVisible2)


  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {/* Sección botón1 */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.log('Please realese me')}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>iniciar sesión</Text>
      </Pressable>

      {/* Sección botón2 */}
      <Pressable
        onPress={() => setTimeout(() => { setModalVisible2(true) }, 2000)}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>iniciar sesión</Text>
      </Pressable>

      {/* Sección botón2 */}
      <Pressable
        onPress={() => setModalVisibleForm(true)}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>iniciar sesión</Text>
      </Pressable>
      <Form modalVisibleForm={modalVisibleForm}></Form>

      {/* Sección ventana modal */}
      <Modal animationType="slide" visible={modalVisible}>
        <Text>Ventana modal</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </Modal>

      {/* Modal2 */}
      <Modal animationType='fade' visible={modalVisible2}>
        <Text>Mostrar por 3 seg</Text>
      </Modal>
    </View>
  );
}

const onPressFunction = () => {
  console.log('Click');
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    baseText: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: '600',
      fontFamily: 'MountainsofChristmas-Regular',
    },
    input: {
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    btnStyle: {
      backgroundColor: '#2437DA',
      padding: 20,
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10
    },
    btnStyleRed: {
      backgroundColor: '#EA4918',
      padding: 20,
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10
    },
    btnTxtStyle: {
      textAlign: 'center',
      color: '#EDEEF4',
      fontSize: 20,
      textTransform: 'capitalize'
    }
  }
)
export default App;
