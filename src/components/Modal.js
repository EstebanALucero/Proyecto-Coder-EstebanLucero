import { StyleSheet, Text, View, Modal as NewModal, Button } from 'react-native'
import React from 'react'

const Modal = ({isVisible, actionDeleteItem, itemSelected }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={false}>
        <View style={styles.modalContainer}>
            <View style={styles.modalStyle}>
                <Text style={styles.modalText}>Estas seguro que deseas borra este elemento?</Text>
                <Text style={styles.modalText}>{itemSelected.name}</Text>
                <Button 
                    title="Eliminar" 
                    color={"red"} 
                    onPress={() => actionDeleteItem()}
                />
            </View>
        </View>
    </NewModal>
  )
}

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0c5149"
    },
    modalStyle: {
        margin: 20,
        backgroundColor: "#09c184",
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
    },
    modalText: {
        fontSize: 20,
        color: "#0d192b",
    }
})