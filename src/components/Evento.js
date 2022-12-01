import styles from './Evento.module.css'



function Evento({ numero }) {
    function meuEvento() {
        console.log(`Fui ativado! ${numero++}`)
    }
    return (
        <>
            <span>Clique para disparar um evento</span><br />
            <button onClick={meuEvento} className={styles.btnEvent}>Ativar!</button>
        </>
    )
}

export default Evento