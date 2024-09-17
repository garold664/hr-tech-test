import type { TimeOff } from '@/types/types';

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
