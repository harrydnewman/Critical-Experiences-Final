import styles from '../styles/Result.module.css'

export default function Result({ selection }) {
    const dummySelection = [
        {
            "id": "0",
            "name": "Traditional Embalming and Burial",
            "description": "Embalming the body with chemicals, placing it in a casket, and burying in a cemetery with vault.",
            "cost_category": "High",
            "cost_range": "$8,000-$12,000+",
            "environmental_impact": "High",
            "religious_compatibility": {
                "Secular": ["Accepted"],
                "Christianity": ["Accepted"],
                "Catholicism": ["Accepted"],
                "Judaism": ["Accepted with Stipulations"],
                "Buddhism": ["Rare or Uncommon"],
                "Hinduism": ["Generally Not Practiced"],
                "Islam": ["Accepted with Stipulations"]
            },
            "religious_compatibility_notes": "Traditional Christian burials strongly favor this method. Judaism and Islam require burial but traditionally forbid embalming; secular preferences vary.",
            "availability": "Legal and available in all U.S. states.",
            "time_to_disposition": "Slow (10-15+ years to decompose fully).",
            "viewing_suitability": "Good",
            "notes": "Ideal for traditional open-casket funerals. Cemetery space required. Long-term land use.",
            "recommended_for": "Those wanting a traditional ceremony with open-casket viewing and strong family/cultural customs.",
            "legal_status": "Legal nationwide"
        },
    ]
    const topSelection = dummySelection[0];
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