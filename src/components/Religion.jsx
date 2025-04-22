import styles from '../styles/Religion.module.css'



export default function Religion({ onReligionChange }){

    
    const handleClick = (value) => {
        if (onReligionChange) {
            console.log(value)
            onReligionChange(value); 
        }
      };
    return (
        <div className={styles.main}>
        <div className={styles.titleDiv}>
        <h1>Your Religious Background</h1>
        </div>
        <div className={styles.buttonsDiv}>
            <button className={styles.button} onClick={() => handleClick("Catholic")}>Catholic</button>
            <button className={styles.button} onClick={() => handleClick("Christian")}>Christian</button>
            <button className={styles.button} onClick={() => handleClick("Muslim")}>Muslim</button>
            <button className={styles.button} onClick={() => handleClick("Jewish")}>Jewish</button>
            <button className={styles.button} onClick={() => handleClick("Buddhist")}>Buddhist</button>
            <button className={styles.button} onClick={() => handleClick("Hindu")}>Hindu</button>
            <button className={styles.button} onClick={() => handleClick("Secular")}>Secular</button>
        </div>
        <div className={styles.noteText}>
            <p><i>We recommend consulting a religious advisor, as these results may not fully reflect your specific religious background.</i></p>
        </div>
        </div>

    )
}