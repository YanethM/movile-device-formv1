import React from 'react';
import { Text, StyleSheet, View, TextInput, Pressable, Modal } from 'react-native';


function App(): JSX.Element {
  const [text, onChangeText] = React.useState('Text');
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.log('Please realese me')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(23, 39, 176)' : 'rgb(210, 230, 255)',
          },
        ]}>
        <Text>Aceptar</Text>
      </Pressable>
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
    }
  }
)
export default App;
