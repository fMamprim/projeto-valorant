import Image from 'next/image'
import styles from './styles.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.title}>
      <Image
        src="/background-logo.svg"
        width={140}
        height={99}
        alt="Logo de background de Valorant"
      />
      <h1>AGENTES</h1>
    </div>
    <div className={styles.characters}>Listagem dos Agentes</div>
  </main>
)
