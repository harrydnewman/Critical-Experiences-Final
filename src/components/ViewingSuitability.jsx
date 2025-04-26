import styles from '../styles/ViewingSuitability.module.css'



export default function ViewingSuitability({ onViewingSuitabilityChange }){

    
    const handleClick = (value) => {
        if (onViewingSuitabilityChange) {
          onViewingSuitabilityChange(value); 
        }
      };
    return (
        <div className={styles.main}>
        <div className={styles.titleDiv}>
        <h1>Viewing Suitability</h1>
        <h3>Is it important for you to have an opportunity for loved ones to view the body for farewells or ceremonies?</h3>
        </div>
        <div className={styles.buttonsDiv}>
           <button className={styles.button} onClick={() => handleClick("Unimportant")}>Unimportant</button>
                       <button className={styles.button} onClick={() => handleClick("SomewhatImportant")}>Somewhat important</button>
                       <button className={styles.button} onClick={() => handleClick("ExtremelyImportant")}>Extremely Important</button>
        </div>
        </div>

    )
}