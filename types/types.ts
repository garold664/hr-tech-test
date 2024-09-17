export interface LinkItem {
  name: string;
  href: string;
}

export interface TimeOff {
  type: 'sick' | 'holiday';
  date: string;
  daysOf: number;
  holiday?: string;
}
