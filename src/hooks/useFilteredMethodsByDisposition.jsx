import { useMemo } from 'react';

const dispositionTiers = {
  NotImportant: ['Immediate (within hours)', 'Fast (within hours)', 'Immediate ceremony with natural decomposition over months to years', 'Immediate'],
  SomewhatImportant: ['Immediate (within hours)', 'Fast (within hours)', 'Moderate (4-8 weeks)', 'Moderate (months to years)', 'Several months (after cremation)', 'Processing takes months to a year', 'Bodies are typically used for months to a few years'],
  ExtremelyImportant: ['Moderate (4-8 weeks)', 'Moderate (months to years)', 'Several months (after cremation)', 'Processing takes months to a year', 'Bodies are typically used for months to a few years'],
  HighestImportance: ['Slow (10-15+ years to decompose fully)', 'Indefinite (intended to prevent decomposition)', 'Decomposition over several months to years; skeletons are often retained for long-term study']
};

export default function useFilteredMethodsByDisposition(methods, preference) {
  return useMemo(() => {
    const cleaned = (preference || '').replace(/\s+/g, '');
    const allowed = dispositionTiers[cleaned];

    if (!allowed) {
      console.warn(`No disposition tier for: "${preference}" → "${cleaned}"`);
      return methods;
    }

    return methods.filter((method) => {
      const disposition = (method.time_to_disposition || '').trim();
      const isAllowed = allowed.some((allowedValue) => disposition.includes(allowedValue));

      if (!isAllowed) {
        console.warn(`Filtered OUT: ${method.name} (${disposition})`);
      }

      return isAllowed;
    });
  }, [methods, preference]);
}
