import { useState } from 'react';
import Cost from '../components/Cost';
import useFilteredMethodsByCost from '../hooks/useFilteredMethodsByCost';
import methods from '../data/methods.json';
import styles from '../styles/Results.module.css';
import EnvironmentalImpact from '../components/EnvironmentalImpact';
import useFilteredMethodsByEnvironmentalImpact from '../hooks/useFilteredMethodsByEnvironmentalImpact';
// import Religion from '../components/Religion';
import Disposition from '../components/Disposition';

export default function Results() {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(Infinity);
  const [EnvironmentalSelection, setEnvironmentalSelection] = useState(null)
  const costFiltered = useFilteredMethodsByCost(methods, low, high);
  const finalFiltered = useFilteredMethodsByEnvironmentalImpact(costFiltered, EnvironmentalSelection);
  



  const handleCostChange = ({ low, high }) => {
    console.log("Received in parent:", low, high);
    setLow(low);
    setHigh(high);
  };

  const handleEnvironmentalImpactChange = (selection) => {
    setEnvironmentalSelection(selection); // No need to clean here anymore
  };

  const handleReligionChange = (selection) => {
    // setEnvironmentalSelection(selection); // No need to clean here anymore
    console.log(selection)
  };

  const handleDispositionChange = (selection) => {
    console.log(selection)
  }
  

//   const filtered = useFilteredMethodsByCost(methods, low, high);

  return (
    <div className={styles.main}>
    {/* <Religion onReligionChange={handleReligionChange}/> */}
    <Disposition onDispositionChange={handleDispositionChange}/>
    {/* <Cost onCostChange={handleCostChange} />
    <EnvironmentalImpact onEnvironmentalImpactChange={handleEnvironmentalImpactChange} />
    
  
    <ul>
      {finalFiltered.map((method) => (
        <li key={method.id}>
          {method.name} — {method.cost_range} — {method.environmental_impact}
        </li>
      ))}
    </ul> */}
  </div>
  

   
  );
}
