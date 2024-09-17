import NoteClockIcon from '@/assets/icons/note-clock.svg';
import MountainsIcon from '@/assets/icons/mountains-moon.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import CrossIcon from '@/assets/icons/cross.svg';
import DotIcon from '@/assets/icons/dot.svg';
import PiggyBankIcon from '@/assets/icons/piggy-bank.svg';
import { Button } from '@/components/ui/button';
import Widget from '@/components/Widget';
import { cn } from '@/lib/utils';
import { upcomingTimeOff } from '@/data/data';
import TimeOffBlock from '@/components/TimeOffBlock';
const sectionStyles = 'border-b-2 border-tertiary pb-3 flex items-center';
export default function TimeOff() {
  return (
    <>
      <section className={sectionStyles}>
        <h2 className="flex gap-3 items-center text-xl">
          <NoteClockIcon /> Time Off
        </h2>
        <div className="ml-auto mr-7">
          Accrual Level Start Date{' '}
          <span className="text-accent2">03/09-2020</span>
        </div>
        <Button
          variant={'outline'}
          size={'sm'}
          className="border-black hover:border-accent hover:text-accent"
        >
          Add Time Off Policy
        </Button>
      </section>
      <section className="flex gap-12 py-6 pb-4 justify-center">
        <Widget
          title="Sick"
          icon={<CrossIcon />}
          value={3}
          subtitle="Days Available"
          footnote="Sick Full-Time"
          description="1 day scheduled"
        />
        <Widget
          title="Annual Leave "
          icon={<MountainsIcon />}
          value={10.3}
          subtitle="Days Available"
          footnote="Holiday Full-Time"
        />
        <Widget
          title="Comp/in Lieu Time"
          icon={<NoteClockIcon className="w-8 h-8" />}
          value={0}
          subtitle="Human Used(YTD)"
          footnote="Comp/in Lieu Time Flexible Policy"
        />
      </section>
      <section className="pt-1">
        <h2 className={`flex gap-2 ${sectionStyles}`}>
          <ClockIcon /> <span className="text-accent3">Upcoming Time Off</span>
        </h2>
        {upcomingTimeOff.map((timeOff) => (
          <TimeOffBlock key={timeOff.date} {...timeOff} />
        ))}
      </section>
    </>
  );
}
