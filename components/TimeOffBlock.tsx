import CrossIcon from '@/assets/icons/cross.svg';
import DotIcon from '@/assets/icons/dot.svg';
import PiggyBankIcon from '@/assets/icons/piggy-bank.svg';
import { TimeOff } from '@/types/types';

export default function TimeOffBlock({ type, date, daysOf, holiday }: TimeOff) {
  return (
    <div className={`block-with-divider flex gap-3 pt-6 pb-4`}>
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
