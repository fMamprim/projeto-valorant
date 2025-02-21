import Image from 'next/image'
import type { IAgent } from 'types/agent'

import styles from './style.module.scss'

export const CardAgent = (agent: IAgent) => (
  <a href="#" className={styles.agent}>
    <div className={styles.text}>
      <p>{agent.role.displayName}</p>
      <strong>{agent.displayName}</strong>
    </div>

    <ul className={styles.abilities}>
      {agent.abilities.map(ability => (
        // mapeia as habilidades, pois não é um array fixo, tem agente que tem 4 habilidades, tem uns que tem 3
        // tem que colocar uma key única para renderizar cada elemento unicamente
        <li key={ability.displayName}>
          <Image
            src={ability.displayIcon}
            width={36}
            height={36}
            alt={'Ícone da habilidade ' + ability.displayName}
          />
        </li>
      ))}
    </ul>

    <div className={styles.background}>
      <span style={{ backgroundImage: `url("${agent.fullPortrait}")` }} />
      {/* acento faz virar um template string */}
    </div>
  </a>
)
