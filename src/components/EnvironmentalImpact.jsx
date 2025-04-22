import styles from '../styles/EnvironmentalImpact.module.css'



export default function EnvironmentalImpact({ onEnvironmentalImpactChange }){

    
    const handleClick = (value) => {
        if (onEnvironmentalImpactChange) {
          onEnvironmentalImpactChange(value); // ✅ just pass value
        }
      };
    return (
        <div className={styles.main}>
        <div className={styles.titleDiv}>
        <h1>Environmental Impact</h1>
        <h3>How important is environmental sustainability to you?</h3>
        </div>
        <div className={styles.buttonsDiv}>
            <button className={styles.button} onClick={() => handleClick("NotImportant")}>Not Important</button>
            <button className={styles.button} onClick={() => handleClick("SomewhatImportant")}>Somewhat important</button>
            <button className={styles.button} onClick={() => handleClick("ExtremelyImportant")}>Extremely Important</button>
            <button className={styles.button} onClick={() => handleClick("Highest Importance")}>Highest Importance</button>
        </div>
        </div>

    )
}