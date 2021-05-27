import { useRef, useState } from 'react';
import styles from '../../styles/temperatura.module.css'

export default function calculoTemperatura(){

    const inputCelsiusRef = useRef<HTMLInputElement>(null)
    const inputFahRef = useRef<HTMLInputElement>(null)
    const inputKelvinRef = useRef<HTMLInputElement>(null)

    let [celsiusFah, setCelsiusFah] = useState(0);
    let [celsiusKelvin, setCelsiusKelvin] = useState(0);
    
    let [fahCelsius, setFahCelsius] = useState(0);
    let [fahKelvin, setFahKelvin] = useState(0);

    let [kelvinCelsius, setKelvinCelsius] = useState(0);
    let [kelvinFah, setKelvinFah] = useState(0);
    
    function convertCelsius() {
        let valueInput = Number(inputCelsiusRef.current.value);

        let cFah = (valueInput * 9) / 5 + 32;
        let cKelvin = valueInput + 273.15;

        setCelsiusFah(cFah);
        setCelsiusKelvin(cKelvin);
    }
    
    function convertFah() {
        let valueInput = Number(inputFahRef.current.value);
        
        let fCelsius = ((valueInput - 32) * 5) / 9;
        let fKelvin = ((valueInput - 32 ) * 5) / 9 + 273.15;

        setFahCelsius(fCelsius);
        setFahKelvin(fKelvin);
    }
    
    function convertKelvin() {
        let valueInput = Number(inputKelvinRef.current.value);

        let kCelsius = valueInput - 273.15;
        let kFah = ((valueInput - 273.15) * 9)/5 + 32;

        setKelvinCelsius(kCelsius)
        setKelvinFah(kFah);
    }

    return (
        <div className={styles.temp}>
            
            <div className={styles.converting}>
                
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="number" 
                        className={styles.inputConvert} 
                        ref={inputCelsiusRef}
                        onKeyUp={convertCelsius}
                        placeholder=" "/>
                    <p className={styles.placeholders}>Celsius</p>
                </label>

                <p className={styles.result}>Fahrenhiet: {celsiusFah.toFixed(2)}</p>
                <p className={styles.result}>Kelvin: {celsiusKelvin.toFixed(2)}</p>

            </div>
            <div className={styles.converting}>
                
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="number" 
                        className={styles.inputConvert} 
                        ref={inputFahRef}
                        onKeyUp={convertFah} 
                        placeholder=" "/>
                    <p className={styles.placeholders}>Fahrenhiet</p>
                </label>

                <p className={styles.result}>Celsius: {fahCelsius.toFixed(2)}</p>
                <p className={styles.result}>Kelvin: {fahKelvin.toFixed(2)}</p>
            </div>
            <div className={styles.converting}>
                
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="number" 
                        className={styles.inputConvert} 
                        ref={inputKelvinRef}
                        onKeyUp={convertKelvin}
                        placeholder=" "/>
                    <p className={styles.placeholders}>Kelvin</p>
                </label>

                <p className={styles.result}>Celsius: {kelvinCelsius.toFixed(2)}</p>
                <p className={styles.result}>Fahrenheit: {kelvinFah.toFixed(2)}</p>
            </div>
        </div>
    )
}