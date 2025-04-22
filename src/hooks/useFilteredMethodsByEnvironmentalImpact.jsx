import { useMemo } from 'react';

const impactTiers = {
  NotImportant: ['High', 'Moderate', 'Low', 'Very Low'],
  SomewhatImportant: ['Moderate', 'Low', 'Very Low'],
  ExtremelyImportant: ['Low', 'Very Low'],
  HighestImportance: ['Very Low']
};

export default function useFilteredMethodsByEnvironmentalImpact(methods, preference) {
  return useMemo(() => {
    const cleaned = (preference || '').replace(/\s+/g, '');
    const allowed = impactTiers[cleaned];

    if (!allowed) {
      console.warn(`No environmental tier for: "${preference}" → "${cleaned}"`);
      return methods;
    }

    return methods.filter((method) => {
      const impact = (method.environmental_impact || '').trim();
      const isAllowed = allowed.includes(impact);

      if (!isAllowed) {
        console.warn(`Filtered OUT: ${method.name} (${impact})`);
      }

      return isAllowed;
    });
  }, [methods, preference]);
}
