import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import Modal from './src/components/Modal';

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [lista, setLista] = useState([]);
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangText = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    setLista(estadoAnterior => [...estadoAnterior, {name: textItem, id: Math.random().toString() },]);
    setTextItem("");
  };

  const renderItem = ({item}) => (
    <View style={styles.renderContainer}>
      <Text>{item.name}</Text>
      <Button title="Editar" onPress={ () => onHandleModal(item)}/>
    </View>
  );
  
  const onHandleModal = item => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = item => {
    setLista(estadoAnterior => estadoAnterior.filter(elemento => elemento.name !== item.name));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Lista de Compras</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder= "Elemento de la lista"
        style={styles.input}
        onChangeText={onHandleChangText}
        value={textItem}
        />
        <Button 
          title= "Agregar a la lista"
          onPress={addItem}
        />
      </View>
      <View style={styles.contenedor}>
        <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
      </View>
      <Modal 
        isVisible={modalVisible} 
        actionDeleteItem={() => onHandleDelete(itemSelected)} 
        itemSelected={itemSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: "#0c5149",
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0a8967",
  },
  contenedor: {
    flex: 12,
    backgroundColor: "#09c184",
    flexDirection: "row"
  },
  renderContainer: {
    margin: 5,
    padding: 10,
    borderColor: "#0d192b",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  input: {
    borderBottomColor: "#0d192b",
    borderBottomWidth: 2,
    width: 170,
    backgroundColor: "#07f9a2",
  },
  titleContainer: {
    paddingTop: 20,
    color: "#0d192b",
    height: 100,
    fontSize: 40,
    fontWeight: "500",
  }
});
