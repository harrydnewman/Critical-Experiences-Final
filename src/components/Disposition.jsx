import styles from '../styles/Disposition.module.css'



export default function Disposition({ onDispositionChange }){

    
    const handleClick = (value) => {
        if (onDispositionChange) {
          onDispositionChange(value); 
        }
      };
    return (
        <div className={styles.main}>
        <div className={styles.titleDiv}>
        <h1>Time To Disposition</h1>
        <h3>How soon would you like the process of handling the body or remains to be completed?</h3>
        </div>
        <div className={styles.buttonsDiv}>
            <button className={styles.button} onClick={() => handleClick("Immediate")}> <span>Immediate<br />(days or hours)</span></button>
            <button className={styles.button} onClick={() => handleClick("Fast")}> <span>Fast<br />(weeks)</span></button>
            <button className={styles.button} onClick={() => handleClick("Moderate")}> <span>Moderate<br /> (months)</span></button>
            <button className={styles.button} onClick={() => handleClick("Long")}> <span>Long <br />(years or indefinite)</span></button>
        </div>
        </div>

    )
}