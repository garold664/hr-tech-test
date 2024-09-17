import CrossIcon from '@/assets/icons/cross.svg';
import DotIcon from '@/assets/icons/dot.svg';
import PiggyBankIcon from '@/assets/icons/piggy-bank.svg';
import { cn } from '@/lib/utils';
import { TimeOff } from '@/types/types';

const sectionStyles = 'border-b-2 border-tertiary pb-3 flex items-center';
export default function TimeOffBlock({ type, date, daysOf, holiday }: TimeOff) {
  return (
    <div className={cn(sectionStyles, `flex gap-3 pt-6 pb-4`)}>
      {type === 'sick' ? <CrossIcon /> : <PiggyBankIcon />}
      <div>
        <p>{date}</p>
        <p className="flex items-center gap-1">
          {type === 'sick' ? (
            <>
              <DotIcon /> {daysOf} day of Sick
            </>
          ) : (
            <>{holiday}</>
          )}
        </p>
      </div>
    </div>
  );
}
