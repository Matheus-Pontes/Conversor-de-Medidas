import { useRef, useState } from 'react'
import styles from '../../styles/computacionais.module.css'

export default function convertComputational() {

    const inputBinRef = useRef<HTMLInputElement>(null);
    const inputHexRef = useRef<HTMLInputElement>(null);
    const inputOctRef = useRef<HTMLInputElement>(null);

    const [binaryToDecimal, setBinaryToDecimal] = useState(0);
    const [hexaToDecimal, setHexaToDecimal] = useState(0)
    const [octalToDecimal, setOctalToDecimal] = useState(0)

    
    function getValueBinary() {
        let bin = inputBinRef.current;

        let arrayDigitado = [];
        let apenasBinario = [];
        let valida = true;

        for(let i=0; i < bin.value.length; i++){
            arrayDigitado.push(Number(bin.value[i]))
        }
        console.log(arrayDigitado)


        arrayDigitado.map( element => {
            if(element != 0 && element != 1){
                console.log('[ERROR]')
                valida = false;
            }
            else{
                apenasBinario.push(element);
            }
        })

        valida ? invertArray(apenasBinario):console.log("")
    }
    function invertArray(array) {
        let invertBinario = [];

        for (var i = (array.length-1); i >= 0; i--){  // invert values in array  
            invertBinario.push(array[i]);
        }

        potentialValues(invertBinario);
    }
    function potentialValues(array) {
        let valuesPotencia = [];

        for (var i = (array.length-1); i >= 0; i--){  // ex: [128, 64, 32, ...]
            if(array[i] === 1){
                valuesPotencia.push(2**i);
            }
            if(array[i] === 0){
                valuesPotencia.push(0);
            }
        }

        toDecimal(valuesPotencia)
    }
    function toDecimal(array) {
        let decimal = 0;
        array.map(element => {
            decimal += element;
        });
        setBinaryToDecimal(decimal);
    }

    function getValueHexa() {
        let hex = inputHexRef.current;

        let arrayDigitado = [];
        let apenasHexa = [];
        let valida = true;

        for(let i=0; i < hex.value.length; i++){
            arrayDigitado.push(hex.value[i].toLocaleLowerCase())
        }
        console.log(arrayDigitado)

        
        arrayDigitado.map(element =>{
            switch(element){

                case '0':
                    apenasHexa.push(0)
                    break
                case '1':
                    apenasHexa.push(1)
                    break
                case '2':
                    apenasHexa.push(2)
                    break
                case '3':
                    apenasHexa.push(3)
                    break
                case '4':
                    apenasHexa.push(4)
                    break
                case '5':
                    apenasHexa.push(5)
                    break
                case '6':
                    apenasHexa.push(6)
                    break
                case '7':
                    apenasHexa.push(7)
                    break
                case '8':
                    apenasHexa.push(8)
                    break
                case '9':
                    apenasHexa.push(9)
                    break
                case 'a':
                    apenasHexa.push(10)
                    break
                case 'b':
                    apenasHexa.push(11)
                    break
                case 'c':
                    apenasHexa.push(12)
                    break
                case 'd':
                    apenasHexa.push(13)
                    break
                case 'e':
                    apenasHexa.push(14)
                    break
                case 'f':
                    apenasHexa.push(15)
                    break
                default:
                    valida=false;
                    break
            }
        })

        valida ? invertArrayHexa(apenasHexa): console.log('vazio')
    }   
    function invertArrayHexa(array) {
        let invertHex = [];

        for (var i = (array.length-1); i >= 0; i--){   
            invertHex.push(array[i]);
        }

        console.log(invertHex)
        
        potentialValuesHexa(invertHex)
    }
    function potentialValuesHexa(array) {
        let arrayHex = [];

        array.map((element, index) => {
            switch(element){
                case 0:
                    arrayHex.push(0)
                    break
                case 1:
                    arrayHex.push(1*(16**index))
                    break
                case 2:
                    arrayHex.push(2*(16**index))
                    break
                case 3:
                    arrayHex.push(3*(16**index))
                    break
                case 4:
                    arrayHex.push(4*(16**index))
                    break
                case 5:
                    arrayHex.push(5*(16**index))
                    break
                case 6:
                    arrayHex.push(6*(16**index))
                    break
                case 7:
                    arrayHex.push(7*(16**index))
                    break
                case 8:
                    arrayHex.push(8*(16**index))
                    break
                case 9:
                    arrayHex.push(9*(16**index))
                    break
                case 10:
                    arrayHex.push(10*(16**index))
                    break
                case 11:
                    arrayHex.push(11*(16**index))
                    break
                case 12:
                    arrayHex.push(12*(16**index))
                    break
                case 13:
                    arrayHex.push(13*(16**index))
                    break
                case 14:
                    arrayHex.push(14*(16**index))
                    break
                case 15:
                    arrayHex.push(15*(16**index))
                    break
                default:
                    console.log('[ERROR]');
                    break
            }
        })
        hextoDecimal(arrayHex)
    }
    function hextoDecimal(array){
        let decimal = 0;
        array.map(element => {
            decimal += element;
        });
        setHexaToDecimal(decimal);
    }
     
    function getValuesOctal(){
        let octal = inputOctRef.current;

        let arrayDigitado = [];
        let apenasOctal = [];
        let valida = true;

        for(let i=0; i < octal.value.length; i++){
            arrayDigitado.push(Number(octal.value[i]))
        }
        console.log(arrayDigitado)

        
        arrayDigitado.map( element =>{
            switch(element){
                case 0:
                    apenasOctal.push(0);
                    break
                case 1:
                    apenasOctal.push(1);
                    break
                case 2:
                    apenasOctal.push(2);
                    break
                case 3:
                    apenasOctal.push(3);
                    break
                case 4:
                    apenasOctal.push(4);
                    break
                case 5:
                    apenasOctal.push(5);
                    break
                case 6:
                    apenasOctal.push(6);
                    break
                case 7:
                    apenasOctal.push(7);
                    break
                case 8:
                    apenasOctal.push(8);
                    break
                default:
                    valida = false;
                    break;
            }
        })

        valida ? invertArrayOcta(apenasOctal): console.log(apenasOctal);
    }
    function invertArrayOcta(array){
        let invertOctal = [];

        for (var i = (array.length-1); i >= 0; i--){  // invert values in array  
            invertOctal.push(array[i]);
        }

        potentialValuesOctal(invertOctal)        
    }
    function potentialValuesOctal(array){
        let arrayOctal = [];

        array.map((element, index) => {
            switch(element){
                case 0:
                    arrayOctal.push(element*(8**index));
                    break
                case 1:
                    arrayOctal.push(element*(8**index));
                    break
                case 2:
                    arrayOctal.push(element*(8**index));
                    break
                case 3:
                    arrayOctal.push(element*(8**index));
                    break
                case 4:
                    arrayOctal.push(element*(8**index));
                    break
                case 5:
                    arrayOctal.push(element*(8**index));
                    break
                case 6:
                    arrayOctal.push(element*(8**index));
                    break
                case 7:
                    arrayOctal.push(element*(8**index));
                    break
                case 8:
                    arrayOctal.push(element*(8**index));
                    break
                default:
                    console.log('error')
                    break;
            }
        })
        console.log(arrayOctal);

        octToDecimal(arrayOctal);
    }
    function octToDecimal(array){
        let decimal = 0;
        array.map(element => {
            decimal += element;
        });
        console.log(decimal);

        setOctalToDecimal(decimal);
    }

    return (
        <div className={styles.comp}>
        
            <div className={styles.converting}>
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="text" 
                        className={styles.Input}
                        ref={inputBinRef}
                        onKeyUp={getValueBinary} 
                        placeholder=" "/>
                    <p className={styles.placeholders}>Binário</p>
                </label>

                <p className={styles.result}>Bin - Decimal: {binaryToDecimal}</p>
            </div>

            <div className={styles.converting}>
                
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="text" 
                        className={styles.Input} 
                        ref={inputHexRef}
                        onKeyUp={getValueHexa}
                        placeholder=" "/>
                    <p className={styles.placeholders}>Hexadecimal</p>
                </label>

                <p className={styles.result}>Hex - Decimal: {hexaToDecimal}</p>
            </div>

            <div className={styles.converting}>
                
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="text" 
                        className={styles.Input} 
                        ref={inputOctRef}
                        onKeyUp={getValuesOctal}
                        placeholder=" "/>
                    <p className={styles.placeholders}>Octal</p>
                </label>

                <p className={styles.result}>Octal - Decimal: {octalToDecimal}</p>
            </div>
        </div>
    )
}
