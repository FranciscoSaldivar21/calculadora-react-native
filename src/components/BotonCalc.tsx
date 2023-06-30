import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


interface Props{
    text : string;
    accion : (numeroTexto : string) => void;
    color : string; //Botom right o botom left
    ancho ?: boolean;
    //? significa que es opcional recibir esta propiedad
}

export const BotonCalc = ({text, color, ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity 
        onPress={() => accion(text)}
        style={{
            ...styles.boton,
            backgroundColor : color,
            flex : (ancho) ? 2 : 1
    }}>
        <Text style={{
            ...styles.botonTxt,
            color: (color === '#9B9B9B') ? 'black' : 'white'
        }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    boton : {
        //backgroundColor : '#9B9B9B',
        height : 80,
        width : 80,
        borderRadius : 100,
        justifyContent : 'center',
        marginHorizontal : 10,
    },
    botonTxt : {
        color : 'white',
        textAlign : 'center',
        fontSize : 30,
        fontWeight : '300',
    },
});