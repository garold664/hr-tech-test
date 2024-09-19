import NoteClockIcon from '@/assets/icons/note-clock.svg';
import MountainsIcon from '@/assets/icons/mountains-moon.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import CrossIcon from '@/assets/icons/cross.svg';
import { Button } from '@/components/ui/button';
import Widget from '@/components/Widget';
import { upcomingTimeOff } from '@/data/data';
import TimeOffBlock from '@/components/TimeOffBlock';
import HistorySection from '@/components/HistorySection';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function TimeOff() {
  return (
    <>
      <section className="block-with-divider xl:flex-row flex-col gap-y-2">
        <h2 className="gap-3 items-center text-xl hidden xl:flex">
          <NoteClockIcon /> Time Off
        </h2>
        <div className="ml-auto xl:mr-7">
          Accrual Level Start Date{' '}
          <span className="text-accent2">03/09-2020</span>
        </div>
        <Button
          variant={'outline'}
          size={'sm'}
          className="border-black hover:border-accent hover:text-accent ml-auto xl:ml-0"
        >
          Add Time Off Policy
        </Button>
      </section>
      <div className="flex">
        <ScrollArea className="flex-1 w-1 relative">
          <ScrollBar orientation="horizontal" className="-bottom-10 " />
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
        </ScrollArea>
      </div>
      <section className="pt-1">
        <h2 className={`block-with-divider flex gap-2`}>
          <ClockIcon /> <span className="text-accent3">Upcoming Time Off</span>
        </h2>
        {upcomingTimeOff.map((timeOff) => (
          <TimeOffBlock key={timeOff.date} {...timeOff} />
        ))}
      </section>
      <HistorySection />
    </>
  );
}
