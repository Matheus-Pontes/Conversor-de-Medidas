import { useRef, useState } from 'react';
import styles from '../../styles/temperatura.module.css'

export default function convertTemperatures(){

    const inputCelsiusRef = useRef<HTMLInputElement>(null)
    const inputFahRef = useRef<HTMLInputElement>(null)
    const inputKelvinRef = useRef<HTMLInputElement>(null)

    let [celsiusToFah, setCelsiusToFah] = useState(0);
    let [celsiusToKelvin, setCelsiusToKelvin] = useState(0);
    
    let [fahToCelsius, setFahToCelsius] = useState(0);
    let [fahToKelvin, setFahToKelvin] = useState(0);

    let [kelvinToCelsius, setKelvinToCelsius] = useState(0);
    let [kelvinToFah, setKelvinToFah] = useState(0);
    
    function convertCelsius() {
        setCelsiusToFah((Number(inputCelsiusRef.current.value) * 9) / 5 + 32);
        setCelsiusToKelvin(Number(inputCelsiusRef.current.value) + 273.15);
    }
    
    function convertFah() {
        setFahToCelsius(((Number(inputFahRef.current.value) - 32) * 5) / 9);
        setFahToKelvin(((Number(inputFahRef.current.value) - 32 ) * 5) / 9 + 273.15);
    }
    
    function convertKelvin() {
        setKelvinToCelsius(Number(inputKelvinRef.current.value) - 273.15)
        setKelvinToFah(((Number(inputKelvinRef.current.value) - 273.15) * 9)/5 + 32);
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

                <p className={styles.result}>Fahrenhiet: {celsiusToFah.toFixed(2)}</p>
                <p className={styles.result}>Kelvin: {celsiusToKelvin.toFixed(2)}</p>

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

                <p className={styles.result}>Celsius: {fahToCelsius.toFixed(2)}</p>
                <p className={styles.result}>Kelvin: {fahToKelvin.toFixed(2)}</p>
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

                <p className={styles.result}>Celsius: {kelvinToCelsius.toFixed(2)}</p>
                <p className={styles.result}>Fahrenheit: {kelvinToFah.toFixed(2)}</p>
            </div>
        </div>
    )
}