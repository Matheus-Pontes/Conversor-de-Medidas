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
                    placeholder=" "/>
                <p className={styles.placeholders}>Metro[m]</p>
            </label>

            <button 
                type="button" 
                className={styles.buttons} 
                onClick={converter}
            >Converter</button>

            <table>
                <tr>
                    <td>km</td>
                    <td>hm</td>
                    <td>dam</td>
                    <td>m</td>
                    <td>dm</td>
                    <td>cm</td>
                    <td>mm</td>
                </tr>
                <tr>
                    <td>{km.toFixed(2)}</td>
                    <td>{hm.toFixed(2)}</td>
                    <td>{dam.toFixed(2)}</td>
                    <td>{m}</td>
                    <td>{dm.toFixed(3)}</td>
                    <td>{cm.toFixed(3)}</td>
                    <td>{mm.toFixed(3)}</td>
                </tr>
            </table>
        </div>
    )
}