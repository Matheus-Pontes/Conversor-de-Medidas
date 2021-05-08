import { useEffect, useState } from 'react'
import styles from '../../styles/header.module.css'
import Link from 'next/link'

export function Header() {

 let [isOpen, setIsOpen] = useState(false)

  function open() {
   setIsOpen(true);
   
    setTimeout(() => {
        setIsOpen(false)
    }, 6000)
   
  }

    return(
        <header className={styles.Header}>
            <div className={styles.open} onClick={open}>
                <p className={styles.forModal} onClick={open}></p>
                <p className={styles.forModal} onClick={open}></p>
                <p className={styles.forModal} onClick={open}></p>
            </div>
            
            <section className={styles.title}>
                <h1>Conversor de Medidas</h1>
            </section>

            { isOpen ? (
                <section className={styles.modal}>
                    <Link href="/"><a className={styles.home}>Home</a></Link>
                    <Link href="/calcTemperatura/calculoTemperatura"><a className={styles.temp}>Temperatura</a></Link>
                    <Link href="/calcComputacionais/calculoComputacionais"><a className={styles.comp}>Computacionais</a></Link>
                    <Link href="/calcMetricas/calculoMetricas" ><a className={styles.metr}>Métricas</a></Link>
                </section>  
             ):( null )}
        </header>
    )
}