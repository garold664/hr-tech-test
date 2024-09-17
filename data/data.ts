import type { TableData, TableDataHeaders, TimeOff } from '@/types/types';

export const mainNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'My info', href: '/my-info' },
  { name: 'People', href: '/people' },
  { name: 'Hiring', href: '/hiring' },
  { name: 'Reports', href: '/reports' },
  { name: 'Files', href: '/files' },
];

export const MyInfoLinks = [
  { name: 'Personal', href: 'my-info/personal' },
  { name: 'Job', href: 'my-info/job' },
  { name: 'Time Off', href: 'my-info/time-off' },
  { name: 'Emergency', href: 'my-info/emergency' },
  { name: 'Documents', href: 'my-info/documents' },
  { name: 'Notes', href: 'my-info/notes' },
  { name: 'Benefits', href: 'my-info/benefits' },
  { name: 'Training', href: 'my-info/training' },
  { name: 'Assets', href: 'my-info/assets' },
  { name: 'Salary', href: 'my-info/salary' },
  { name: 'Bonuses', href: 'my-info/bonuses' },
  { name: 'Advertisements', href: 'my-info/advertisements' },
];

export const upcomingTimeOff: TimeOff[] = [
  {
    type: 'sick',
    date: 'Jan 27',
    daysOf: 1,
  },
  {
    type: 'holiday',
    date: 'Jul 4',
    daysOf: 1,
    holiday: 'Independence Day',
  },
];

export const tableHeaders: TableDataHeaders = [
  ['date', 'Date'],
  ['description', 'Description'],
  ['used-days', 'Used Days (-)'],
  ['earned-days', 'Earned Days (+)'],
  ['balance', 'Balance'],
];

export const tableData: TableData[] = [
  {
    id: 1,
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    'used-days': 0,
    'earned-days': '3.00',
    balance: '3.00',
  },
  {
    id: 2,
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    'used-days': -6,
    'earned-days': '3.00',
    balance: '3.00',
  },
  {
    id: 3,
    date: '',
    description: '',
    'used-days': 0,
    'earned-days': '3.00',
    balance: '3.00',
  },
  {
    id: 4,
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    'used-days': 0,
    'earned-days': '3.00',
    balance: '3.00',
  },
  {
    id: 5,
    date: '',
    description: '',
    'used-days': -6,
    'earned-days': '3.00',
    balance: '3.00',
  },
  {
    id: 6,
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    'used-days': -6,
    'earned-days': '3.00',
    balance: '3.00',
  },
];
