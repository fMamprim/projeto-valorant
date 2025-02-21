import Image from 'next/image'
import styles from './style.module.scss'

// criar uma interface pra colocar na const Agent e poder usar as propriedades de cada agent que está no json
interface AgentProps {
  agent: {
    role: {
      displayName: string
    }
    displayName: string
    abilities: {
      displayIcon: string
      displayName: string
    }[]
    fullPortrait: string
    // esses 2 colchetes transformam isso em um array
  }
}

export const Agent = ({ agent }: AgentProps) => (
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
