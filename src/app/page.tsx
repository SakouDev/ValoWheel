'use client'

import Image, { StaticImageData } from 'next/image'
import styles from './page.module.css'
import { ImageAgent } from '../../public/Agent/Image'
import { randomInt } from 'crypto'
import { useEffect, useState } from 'react'

export default function Home() {

  const agents = [
    {
      name: 'Brimstone',
      type: 'Controller',
      number: 1,
      image: ImageAgent.brimstone
    },
    {
      name: 'Viper',
      type: 'Controller',
      number: 2,
      image: ImageAgent.viper
    },
    {
      name: 'Omen',
      type: 'Controller',
      number: 3,
      image: ImageAgent.omen
    },
    {
      name: 'Killjoy',
      type: 'Sentinel',
      number: 4,
      image: ImageAgent.killjoy
    },
    {
      name: 'Cypher',
      type: 'Sentinel',
      number: 5,
      image: ImageAgent.cypher
    },
    {
      name: 'Sova',
      type: 'Initiator',
      number: 6,
      image: ImageAgent.sova
    },
    {
      name: 'Sage',
      type: 'Sentinel',
      number: 7,
      image: ImageAgent.sage
    },
    {
      name: 'Phoenix',
      type: 'Duelist',
      number: 9,
      image: ImageAgent.phoenix
    },
    {
      name: 'Jett',
      type: 'Duelist',
      number: 10,
      image: ImageAgent.jett
    },
    {
      name: 'Reyna',
      type: 'Duelist',
      number: 11,
      image: ImageAgent.reyna
    },
    {
      name: 'Raze',
      type: 'Duelist',
      number: 12,
      image: ImageAgent.raze
    },
    {
      name: 'Breach',
      type: 'Initiator',
      number: 13,
      image: ImageAgent.breach
    },
    {
      name: 'Skye',
      type: 'Initiator',
      number: 14,
      image: ImageAgent.skye
    },
    {
      name: 'Yoru',
      type: 'Duelist',
      number: 15,
      image: ImageAgent.yoru
    },
    {
      name: 'Astra',
      type: 'Controller',
      number: 16,
      image: ImageAgent.astra
    },
    {
      name: 'KAY/O',
      type: 'Initiator',
      number: 17,
      image: ImageAgent.kayo
    },
    {
      name: 'Chamber',
      type: 'Sentinel',
      number: 18,
      image: ImageAgent.chamber
    },
    {
      name: 'Neon',
      type: 'Duelist',
      number: 19,
      image: ImageAgent.neon
    },
    {
      name: 'Fade',
      type: 'Initiator',
      number: 20,
      image: ImageAgent.fade
    },
    {
      name: 'Harbor',
      type: 'Initiator',
      number: 21,
      image: ImageAgent.harbor
    },
    {
      name: 'Gekko',
      type: 'Initiator',
      number: 22,
      image: ImageAgent.gekko
    },
    {
      name: 'Deadlock',
      type: 'Sentinel',
      number: 23,
      image: ImageAgent.deadlock
    },
  ]

  const [GeneratedResults,setGeneratedResults] = useState([])
  let result:any = []

  function GenerateAgents() {
    for (let index = 0; index < 100; index++) {
      result.push(agents[Math.floor(Math.random() * agents.length)])
    }
    setGeneratedResults(result)
  }

  useEffect(() => {
    GenerateAgents()
  },[])

  return (
    <main className={styles.main}>
      <div className={styles.redline}></div>
      <div className={styles.wheelContainer}>
        {GeneratedResults.map((element:any, i) => {
          return (
            <div className={styles.card} key={i}>
              {/* <h1>{element.name}</h1> */}
              <Image src={element.image} alt={"image"} height={500} width={212} />
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    </main>
  )
}
