import { useMemo } from 'react';

function parseCostRange(range) {
  const matches = range.match(/\$([\d,]+)(?:-(\$?[\d,]+))?/);
  if (!matches) return [null, null];

  const min = parseInt(matches[1].replace(/,/g, ''));
  const maxMatch = matches[2] ? matches[2].replace(/[\$,]/g, '') : null;
  const max = maxMatch ? parseInt(maxMatch) : Infinity;

  return [min, max];
}

export default function useFilteredMethodsByCost(methods, low, high) {
  return useMemo(() => {
    return methods.filter((method) => {
      const [min, max] = parseCostRange(method.cost_range || '');
      if (min === null || max === null) return false;
      return !(max < low || min > high);
    });
  }, [methods, low, high]);
}
