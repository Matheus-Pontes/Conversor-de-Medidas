import { useRef, useState } from 'react'
import styles from '../../styles/metricas.module.css'

export default function convertMeters() {

    const inputValueRef = useRef<HTMLInputElement>(null);

    let [metersToKm, setMetersToKm] = useState(0);
    let [metersToHm, setMetersToHm] = useState(0);
    let [metersToDam, setMetersToDam] = useState(0);
    let [meters, setMeters] = useState(0);
    let [metersToDm, setMetersToDm] = useState(0);
    let [metersToCm, setMetersToCm] = useState(0);
    let [metersToMm, setMetersToMm] = useState(0);

    function handleConvert(){
        setMetersToKm(Number(inputValueRef.current.value)*1000)      
        setMetersToHm(Number(inputValueRef.current.value)*100)       
        setMetersToDam(Number(inputValueRef.current.value)*10)       
        setMeters(Number(inputValueRef.current.value));
        setMetersToDm((Number(inputValueRef.current.value)/1000))        
        setMetersToCm((Number(inputValueRef.current.value)/100))        
        setMetersToMm((Number(inputValueRef.current.value)/10))    
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputCenter}>
                <label htmlFor="" className={styles.labels}>
                    <input 
                        type="number" 
                        className={styles.convertMetro} 
                        ref={inputValueRef} 
                        onKeyUp={handleConvert}
                        placeholder=" "/>
                    <p className={styles.placeholders}>Metros [m]</p>
                </label>
            </div>

            <div className={styles.containerResult}>
                <p className={styles.result}>Km: {metersToKm.toFixed(2)}</p>
                
                <p className={styles.result}>Hm: {metersToHm.toFixed(2)}</p>
                
                <p className={styles.result}>Dam: {metersToDam.toFixed(2)}</p>
                
                <p className={styles.result}>M: {meters}</p>
                
                <p className={styles.result}>Dm: {metersToDm.toFixed(3)}</p>
                
                <p className={styles.result}>Cm: {metersToCm.toFixed(3)}</p>
                
                <p className={styles.result}>Mm: {metersToMm.toFixed(3)}</p>
            </div>
        </div>
    )
}