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

export interface TableData {
  id: number;
  date: string;
  description: string;
  'used-days': number;
  'earned-days': string;
  balance: string;
}

export type TableDataHeaders = [keyof TableData, string][];
