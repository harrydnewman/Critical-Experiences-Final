import styles from '../styles/Result.module.css'

export default function Result({ selection }) {
    const topSelection = selection[0];
    return (
        <div className={styles.main}>
            <div className={styles.header}>
            <h1>Top Recommendation:</h1>
            </div>
           
            <div className={styles.title}>
                <h1>{topSelection.name}</h1>
                <h4>{topSelection.description}</h4>
            </div>
            <div className={styles.cost}>
                <h1>Cost</h1>
                <h3>{topSelection.cost_category}</h3>
                <h3>{topSelection.cost_range}</h3>
            </div>
            <div className={styles.environmentalImpact}>
                <h1>Environmental Impact</h1>
                <h3>{topSelection.environmental_impact}</h3>
            </div>
            <div className={styles.availability}>
                <h1>Availability</h1>
                <h3>{topSelection.availability}</h3>
            </div>
            <div className={styles.disposition}>
                <h1>Time To Disposition</h1>
                <h3>{topSelection.time_to_disposition}</h3>
            </div>
            <div className={styles.viewing}>
                <h1>Viewing Suitability</h1>
                <h3>{topSelection.viewing_suitability}</h3>
            </div>
            <div className={styles.notes}>
                <h1>Things To Note</h1>
                <h3>{topSelection.notes}</h3>
            </div>
            <div className={styles.recommended}>
                <h1>Recommended For</h1>
                <h3>{topSelection.recommended_for}</h3>
            </div>

        </div>
    )
}