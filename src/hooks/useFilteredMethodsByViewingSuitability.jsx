import { useMemo } from 'react';

const viewingSuitabilityTiers = {
  Unimportant: ['None', 'Limited', 'Good'],
  SomewhatImportant: ['Limited', 'Good'],
  ExtremelyImportant: ['Good']
};

export default function useFilteredMethodsByViewingSuitability(methods, preference) {
  return useMemo(() => {
    const cleaned = (preference || '').replace(/\s+/g, '');
    const allowed = viewingSuitabilityTiers[cleaned];

    if (!allowed) {
      console.warn(`No viewing suitability tier for: "${preference}" → "${cleaned}"`);
      return methods;
    }

    return methods.filter((method) => {
      const suitability = (method.viewing_suitability || '').trim();
      const isAllowed = allowed.includes(suitability);

      if (!isAllowed) {
        console.warn(`Filtered OUT: ${method.name} (${suitability})`);
      }

      return isAllowed;
    });
  }, [methods, preference]);
}
