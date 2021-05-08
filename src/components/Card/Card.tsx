import styles from '../../styles/cards.module.css';
import Link from 'next/link';

export function Card(props){
    return(
        <Link href={props.caminho}>
            <a  className={styles.card}>
                <div className={styles.circle} style={{borderColor: props.color}}>
                    <img src={props.image} className={styles.imagem}alt="terá uma imagem aqui"/>
                </div>

                <h4>{props.text}</h4>
            </a>
        </Link>
    )
}