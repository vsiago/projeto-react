import styles from './Frase.module.css'

function Frase({ nome }) {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Meu nome é: {nome}</p>
    </div>
  )
}

export default Frase