/**
 * Utility to generate dynamic upcoming travel months based on the current date.
 * Automatically rolls forward month-by-month and year-by-year so forms never display outdated months.
 */

export interface TravelMonthOptions {
  count?: number;
  includeImmediate?: boolean;
  includeFlexible?: boolean;
}

export function getDynamicTravelMonths(options: TravelMonthOptions = {}): string[] {
  const { count = 8, includeImmediate = true, includeFlexible = true } = options;
  const list: string[] = [];

  if (includeImmediate) {
    list.push('Immediate / Next 30 Days');
  }

  const now = new Date();
  for (let i = 0; i < count; i++) {
    // Setting day to 1 avoids month skipping issues on days 29-31
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const label = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    list.push(label);
  }

  if (includeFlexible) {
    list.push('Flexible / Dates open');
  }

  return list;
}
