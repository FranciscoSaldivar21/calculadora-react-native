import { useRef, useState } from "react";


enum Operaciones{
    sumar, restar, multiplicar, dividir,
}


export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operaciones>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = ( numeroTexto : string) => {
        //No aceptar doble punto decimal
        if( numero.includes('.') && numeroTexto === '.') return;

        //Si el numero comienza con 0
        if(numero.startsWith('0') || numero.startsWith('-0')){
            //Si se presiona el punto decimal
            if(numeroTexto === '.'){
                setNumero(numero + numeroTexto);
                //Evaluar si es otro cero y hay punto
            }else if( numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
                //Evaluar si no es 0 y no hay punto
            }else if( numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
                //Evaluar no poner muchos ceros antes del punto
            }else if( numeroTexto === '0' && !numero.includes('.')){
                setNumero(numeroTexto);
            }else{
                setNumero(numero + numeroTexto);
            }
        }else{
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if( numero.includes('-')){
            setNumero(numero.replace('-', ''));
        }else{
            setNumero('-' + numero);
        }
    }

    const borrar = () => {
        if(numero.length === 2 && numero.includes('-')){
            setNumero('0');
        }else{
            setNumero(numero.substr(0, numero.length - 1));
        }
    }

    const cambiarNumeroPorAterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnSumar = () => {
        cambiarNumeroPorAterior();
        ultimaOperacion.current = Operaciones.sumar;
    }

    const btnRestar = () => {
        cambiarNumeroPorAterior();
        ultimaOperacion.current = Operaciones.restar;
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAterior();
        ultimaOperacion.current = Operaciones.multiplicar;
    }

    const btnDividir = () => {
        cambiarNumeroPorAterior();
        ultimaOperacion.current = Operaciones.dividir;
    }

    const calcular = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operaciones.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operaciones.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operaciones.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operaciones.dividir:
                setNumero(`${num2 / num1}`)
                break;
            default:
                break;
        }
        setNumeroAnterior('0');
    }

    return{
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        borrar,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular
    }
}
