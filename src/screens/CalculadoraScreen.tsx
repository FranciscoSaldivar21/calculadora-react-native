import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    const {numeroAnterior, numero, limpiar, positivoNegativo, borrar, btnDividir, armarNumero, btnMultiplicar, btnRestar, calcular, btnSumar} = useCalculadora();
  return (
    <View>
        {
            (numeroAnterior !== '0' ) && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
        }
        <Text 
            style={styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {numero}
        </Text>

        <View style={styles.fila}>
            <BotonCalc text='C' color='#9B9B9B' accion={limpiar}/>
            <BotonCalc text='+/-' color='#9B9B9B' accion={positivoNegativo}/>
            <BotonCalc text='del' color='#9B9B9B' accion={borrar}/>
            <BotonCalc text='/' color='#FF9427' accion={btnDividir}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc text='7' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='8' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='9' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='x' color='#FF9427' accion={btnMultiplicar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc text='4' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='5' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='6' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='—' color='#FF9427' accion={btnRestar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc text='1' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='2' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='3' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='+' color='#FF9427' accion={btnSumar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc text='0' color='#2D2D2D' accion={armarNumero} ancho={true}/>
            <BotonCalc text='.' color='#2D2D2D' accion={armarNumero}/>
            <BotonCalc text='=' color='#FF9427' accion={calcular}/>
        </View>
    </View>
  )
  
}
