import { useState } from 'react';
import Cost from '../components/Cost';
import useFilteredMethodsByCost from '../hooks/useFilteredMethodsByCost';
import methods from '../data/methods.json';
import styles from '../styles/Results.module.css';
import EnvironmentalImpact from '../components/EnvironmentalImpact';
import useFilteredMethodsByEnvironmentalImpact from '../hooks/useFilteredMethodsByEnvironmentalImpact';
import Disposition from '../components/Disposition';
import ViewingSuitability from '../components/ViewingSuitability';
import useFilteredMethodsByViewingSuitability from '../hooks/useFilteredMethodsByViewingSuitability';


export default function Results() {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(Infinity);
  const [EnvironmentalSelection, setEnvironmentalSelection] = useState(null)
  const [viewingSuitabilitySelection, setViewingSuitabilitySelection] = useState(null);
  const costFiltered = useFilteredMethodsByCost(methods, low, high);
  const envFiltered = useFilteredMethodsByEnvironmentalImpact(costFiltered, EnvironmentalSelection);
  const finalFiltered = useFilteredMethodsByViewingSuitability(envFiltered, viewingSuitabilitySelection);
  
  



  const handleCostChange = ({ low, high }) => {
    console.log("Received in parent:", low, high);
    setLow(low);
    setHigh(high);
  };

  const handleEnvironmentalImpactChange = (selection) => {
    setEnvironmentalSelection(selection); // No need to clean here anymore
  };

  const handleDispositionChange = (selection) => {
    console.log(selection)
  }

  const handleViewingSuitabilityChange = (selection) => {
    setViewingSuitabilitySelection(selection);
  };
  

  return (
    <div className={styles.main}>
 {/* <Disposition onDispositionChange={handleDispositionChange}/>  */}
   
     <Cost onCostChange={handleCostChange} />
    <EnvironmentalImpact onEnvironmentalImpactChange={handleEnvironmentalImpactChange} />
    <ViewingSuitability onViewingSuitabilityChange={handleViewingSuitabilityChange}/> 
    
  
    <ul>
      {finalFiltered.map((method) => (
        <li key={method.id}>
          {method.name} — {method.cost_range} — {method.environmental_impact}
        </li>
      ))}
    </ul> 
  </div>
  

   
  );
}
