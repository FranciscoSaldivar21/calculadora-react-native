import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex : 1,
        backgroundColor : 'black',
        paddingHorizontal : 20,
        justifyContent : 'flex-end'
    },
    resultado: {
        color : 'white',
        fontSize : 60,
        textAlign : 'right',
    },
    resultadoPequeno: {
        color : 'rgba(255,255,255,.4)',
        fontSize : 30,
        textAlign : 'right',
    },
    fila: {
        flexDirection : 'row',
        justifyContent : 'center',
        paddingBottom : 18,
    },
});