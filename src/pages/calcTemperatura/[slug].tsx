import { useRef, useState } from 'react'
import styles from '../../styles/temperatura.module.css'

export default function calculoTemperatura(){

    const inputCelsiusRef = useRef<HTMLInputElement>(null)
    const inputFahRef = useRef<HTMLInputElement>(null)
    const inputKelvinRef = useRef<HTMLInputElement>(null)

    let [celsius, setCelsius] = useState(0);
    let [celsiusFah, setCelsiusFah] = useState(0);
    let [celsiusKelvin, setCelsiusKelvin] = useState(0);

    let [fah, setFah] = useState(0);
    let [fahCelsius, setFahCelsius] = useState(0);
    let [fahKelvin, setFahKelvin] = useState(0);

    let [kelvin, setKelvin] = useState(0);
    let [kelvinCelsius, setKelvinCelsius] = useState(0);
    let [kelvinFah, setKelvinFah] = useState(0);
    
    function convertCelsius() {
        let valueInput = Number(inputCelsiusRef.current.value);

        let cFah = (valueInput * 1.8) + 32
        let cKelvin = valueInput + 273.15

        setCelsius(valueInput);
        setCelsiusFah(cFah);
        setCelsiusKelvin(cKelvin);
    }
    
    function convertFah() {
        let valueInput = Number(inputFahRef.current.value);
        
        let fCelsius = (valueInput - 32) * 0.5
        let fKelvin = (valueInput-32)*0.5+273.15

        setFah(valueInput);
        setFahCelsius(fCelsius);
        setFahKelvin(fKelvin);
    }
    
    function convertKelvin() {
        let valueInput = Number(inputKelvinRef.current.value);

        let kCelsius = valueInput - 273.15;
        let kFah = (valueInput - 273.15) * 1.8 + 32;

        setKelvin(valueInput);
        setKelvinCelsius(kCelsius)
        setKelvinFah(kFah);
    }

    return (
        <div className={styles.temp}>
            <div>
                <div className={styles.converting}>
                    
                    <label htmlFor="" className={styles.labels}>
                        <input 
                            type="number" 
                            className={styles.convertCelsius} 
                            ref={inputCelsiusRef}
                            placeholder=" "/>
                        <p className={styles.placeholders}>Celsius</p>
                    </label>

                    <button 
                        type="button" 
                        className={styles.buttons} 
                        onClick={convertCelsius}
                    >Converter</button>
                </div>
                <div className={styles.converting}>
                    
                    <label htmlFor="" className={styles.labels}>
                        <input 
                            type="number" 
                            className={styles.convertCelsius} 
                            ref={inputFahRef} 
                            placeholder=" "/>
                        <p className={styles.placeholders}>Fahrenhiet</p>
                    </label>

                    <button 
                        type="button" 
                        className={styles.buttons}
                        onClick={convertFah}
                        >Converter</button>
                </div>
                <div className={styles.converting}>
                    
                    <label htmlFor="" className={styles.labels}>
                        <input 
                            type="number" 
                            className={styles.convertCelsius} 
                            ref={inputKelvinRef}
                            placeholder=" "/>
                        <p className={styles.placeholders}>Kelvin</p>
                    </label>

                    <button 
                        type="button" 
                        className={styles.buttons}
                        onClick={convertKelvin}
                        >Converter</button>
                </div>
            </div>

            
            <table className={styles.tableResult}>
                <tr>
                    <td className={styles.tdResults}></td>
                    <td className={styles.tdResults}>Celsius</td>
                    <td className={styles.tdResults}>Fahrenheit</td>
                    <td className={styles.tdResults}>Kelvin</td>
                </tr>
                <tr>
                    <td className={styles.tdResults}>Celsius</td>
                    <td className={styles.tdResults}>{celsius}</td>
                    <td className={styles.tdResults}>{celsiusFah.toFixed(2)}</td>
                    <td className={styles.tdResults}>{celsiusKelvin.toFixed(2)}</td>
                </tr>
                <tr>
                    <td className={styles.tdResults}>Fahrenheit</td>
                    <td className={styles.tdResults}>{fahCelsius.toFixed(2)}</td>
                    <td className={styles.tdResults}>{fah}</td>
                    <td className={styles.tdResults}>{fahKelvin.toFixed(2)}</td>
                </tr>
                <tr>
                    <td className={styles.tdResults}>Kelvin</td>
                    <td className={styles.tdResults}>{kelvinCelsius.toFixed(2)}</td>
                    <td className={styles.tdResults}>{kelvinFah.toFixed(2)}</td>
                    <td className={styles.tdResults}>{kelvin}</td>
                </tr>
            </table>
        </div>
    )
}