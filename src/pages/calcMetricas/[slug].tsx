import { useRef, useState } from 'react'
import styles from '../../styles/metricas.module.css'

export default function calculoMetricas() {

    const inputValueRef = useRef<HTMLInputElement>(null);

    let [km, setKm] = useState(0);
    let [hm, setHm] = useState(0);
    let [dam, setDam] = useState(0);
    let [m, setM] = useState(0);
    let [dm, setDm] = useState(0);
    let [cm, setCm] = useState(0);
    let [mm, setMm] = useState(0);

    function converter(){
        let valueInput = Number(inputValueRef.current.value);

        setKm(valueInput*1000)      
        setHm(valueInput*100)       
        setDam(valueInput*10)       
        setM(valueInput);
        setDm((valueInput/1000))        
        setCm((valueInput/100))        
        setMm((valueInput/10))    
    }

    return (
        <div className={styles.container}>
            <label htmlFor="" className={styles.labels}>
                <input 
                    type="number" 
                    className={styles.convertMetro} 
                    ref={inputValueRef} 
                    onKeyUp={converter}
                    placeholder=" "/>
                <p className={styles.placeholders}>Metro[m]</p>
            </label>

            <div className={styles.containerResult}>
                <p className={styles.result}>Km: {km.toFixed(2)}</p>
                
                <p className={styles.result}>Hm: {hm.toFixed(2)}</p>
                
                <p className={styles.result}>Dam: {dam.toFixed(2)}</p>
                
                <p className={styles.result}>M: {m}</p>
                
                <p className={styles.result}>Dm: {dm.toFixed(3)}</p>
                
                <p className={styles.result}>Cm: {cm.toFixed(3)}</p>
                
                <p className={styles.result}>Mm: {mm.toFixed(3)}</p>
            </div>
        </div>
    )
}