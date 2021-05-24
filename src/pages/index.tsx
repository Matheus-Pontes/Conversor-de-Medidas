import React, {} from 'react'
import { Card } from '../components/Card/Card'

export default function Home() { 

  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>
    
      <main>
        {/*Aqui dentro terá os cards*/}
        <section>
          <Card text="Temperatura" image="/temperatura.png" color="#04d631" caminho="calcTemperatura/calculoTemperatura"/>

          <Card text="Computacionais" image="/computer.png" color="#0496ff" caminho="/calcComputacionais/calculoComputacionais"/>

          <Card text="Métricas" image="/régua.png" color="#8257E6" caminho="/calcMetricas/calculoMetricas"/>
        </section>
        
      </main>
      
    </>
  )
}
