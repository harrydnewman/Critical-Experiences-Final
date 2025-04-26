import styles from '../styles/Cost.module.css'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

function scaleToDollar(value) {
    const split = 66.67;
    const midDollar = 10000;
    const min = 0;
    const max = 200000;

    if (value <= split) {
        const percent = value / split;
        return Math.round(min + percent * (midDollar - min));
    } else {
        const percent = (value - split) / (100 - split);
        return Math.round(midDollar + percent * (max - midDollar));
    }
}

function scaleFromDollar(dollar) {
    const split = 66.67;
    const midDollar = 10000;
    const min = 0;
    const max = 200000;

    if (dollar <= midDollar) {
        const percent = (dollar - min) / (midDollar - min);
        return percent * split;
    } else {
        const percent = (dollar - midDollar) / (max - midDollar);
        return split + percent * (100 - split);
    }
}


function valueText(value) {
    const dollar = scaleToDollar(value);
    const percent = value;
    return `$${dollar.toLocaleString()} (${percent.toFixed(1)}% of max)`;
}



const GradientSlider = styled(Slider)({
    '& .MuiSlider-rail': {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#eee', // the base visible behind the gradient
        opacity: 1,
    },
    '& .MuiSlider-track': {
        height: 8,
        borderRadius: 4,
        background: 'linear-gradient(to right, #00e676, #ffeb3b, #f44336)', // visible only on the selected track
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(0, 230, 118, 0.16)',
        },
    },
});


const marks = [
    {
        value: 0,
        label: '$0',
    },
    {
        value: 100,
        label: '$200,000+',
    },
];



export default function Cost({ onCostChange, onCostSelected }) {
    const [value, setValue] = useState([
        scaleFromDollar(1000), // example low
        scaleFromDollar(60000), // example high
      ]);
    const [lowCost, setLowCost] = useState(0)
    const [highCost, setHighCost] = useState(0)

    const initialLowCost = scaleToDollar(value[0]);
    const initialHighCost = scaleToDollar(value[1]);



    useEffect(() => {
        setLowCost(initialLowCost);
        setHighCost(initialHighCost);
    }, [initialHighCost, initialLowCost]);

    useEffect(() => {
        setLowCost(scaleToDollar(value[0]));
        setHighCost(scaleToDollar(value[1]));
        
    }, [value]);

    useEffect(() => {
        if (onCostChange) {
            onCostChange({ low: lowCost, high: highCost });
          }
        
    }, [highCost, lowCost]);

    


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={styles.main}>
                   <div className={styles.titleDiv}>
                   <h1>Cost</h1>
                   <h3>What is your preferred budget range for this process?</h3>
                   </div>
            <div className={styles.sliderDiv}>
                <GradientSlider
                    getAriaLabel={() => 'Cost Range'}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valueText}
                    valueLabelFormat={(val) => `$${scaleToDollar(val).toLocaleString()}`}
                    marks={marks}
                    step={0.1}
                    valueLabelDisplay="on"
                />

            </div>

             <div className={styles.buttonsDiv}>
                        <button className={styles.button} onClick={() => onCostSelected()}> <span>Continue</span></button>
                    </div>
        </div>
    )
}