import { useState } from 'react';
import Cost from '../components/Cost';
import useFilteredMethodsByCost from '../hooks/useFilteredMethodsByCost';
import methods from '../data/methods.json';
import styles from '../styles/Selection.module.css';
import EnvironmentalImpact from '../components/EnvironmentalImpact';
import useFilteredMethodsByEnvironmentalImpact from '../hooks/useFilteredMethodsByEnvironmentalImpact';
import Disposition from '../components/Disposition';
import ViewingSuitability from '../components/ViewingSuitability';
import useFilteredMethodsByViewingSuitability from '../hooks/useFilteredMethodsByViewingSuitability';
import useFilteredMethodsByDisposition from '../hooks/useFilteredMethodsByDisposition';
import Result from '../components/Result';
export default function Selections() {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(Infinity);
  const [EnvironmentalSelection, setEnvironmentalSelection] = useState(null)
  const [viewingSuitabilitySelection, setViewingSuitabilitySelection] = useState(null);
  const [dispositionSelection, setDispositionSelection] = useState(null);
  const costFiltered = useFilteredMethodsByCost(methods, low, high);
  const envFiltered = useFilteredMethodsByEnvironmentalImpact(costFiltered, EnvironmentalSelection);
  const dispositionFiltered = useFilteredMethodsByDisposition(envFiltered, dispositionSelection);
  const finalFiltered = useFilteredMethodsByViewingSuitability(dispositionFiltered, viewingSuitabilitySelection);
  const [stage, setStage] = useState('cost');
  const [transitioning, setTransitioning] = useState(false);


  const handleCostChange = ({ low, high }) => {
    console.log("Received in parent:", low, high);
    setLow(low);
    setHigh(high);
  };

  const handleCostSelected = () => {
    setTransitioning(true); // Start sweep animation
    setTimeout(() => {
      setTransitioning(false); // End sweep after transition
      setStage('environmental'); // Move to next stage
    }, 500); // 500ms or however long you want the sweep to last
  };


  const handleEnvironmentalImpactChange = (selection) => {
    setEnvironmentalSelection(selection); // No need to clean here anymore
    setTransitioning(true); // Start sweep animation
    setTimeout(() => {
      setTransitioning(false); // End sweep after transition
      setStage('disposition'); // Move to next stage
    }, 500); // 500ms or however long you want the sweep to last
  };

  const handleDispositionChange = (selection) => {
    setDispositionSelection(selection);
    setTransitioning(true); // Start sweep animation
    setTimeout(() => {
      setTransitioning(false); // End sweep after transition
      setStage('viewing'); // Move to next stage
    }, 500); // 500ms or however long you want the sweep to last
  };


  const handleViewingSuitabilityChange = (selection) => {
    setViewingSuitabilitySelection(selection);
    console.log(finalFiltered)
    setTransitioning(true); // Start sweep animation
    setTimeout(() => {
      setTransitioning(false); // End sweep after transition
      setStage('result'); // Move to next stage
    }, 500);
  };


  return (
    <div className={`${styles.main} ${transitioning ? styles.transitioning : ''}`}>
      {stage === 'cost' && <Cost onCostChange={handleCostChange} onCostSelected={handleCostSelected} />}
      {stage === 'environmental' && <EnvironmentalImpact onEnvironmentalImpactChange={handleEnvironmentalImpactChange} />}
      {stage === 'disposition' && <Disposition onDispositionChange={handleDispositionChange} />}
      {stage === 'viewing' && <ViewingSuitability onViewingSuitabilityChange={handleViewingSuitabilityChange} />}
      {stage === 'result' && <Result selection={finalFiltered} />}

    </div>
  );
}
