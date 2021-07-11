import styles from '../../styles/header.module.css'
import Link from 'next/link'

export function Header() {
    return(
        <header className={styles.Header}>
            <input type="checkbox" className={styles.checkbox} id="openModal"/>
            <label className={styles.open} htmlFor="openModal">
                <p className={styles.forModal} />
                <p className={styles.forModal} />
                <p className={styles.forModal} />
            </label>
            
            <section className={styles.modal}>
                <Link href="/"><a className={styles.home}>Home</a></Link>
                <Link href="/calcTemperatura/convertTemperatures"><a className={styles.temp}>Temperatura</a></Link>
                <Link href="/calcComputacionais/convertComputational"><a className={styles.comp}>Computacionais</a></Link>
                <Link href="/calcMetricas/convertMeters" ><a className={styles.metr}>Métricas</a></Link>
            </section> 

            <section className={styles.title}>
                <h1>Conversor de Medidas</h1>
            </section> 
        </header>
    )
}