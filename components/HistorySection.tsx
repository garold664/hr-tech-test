import HistoryIcon from '@/assets/icons/history.svg';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';
import XIcon from '@/assets/icons/x.svg';

export default function HistorySection() {
  return (
    <section>
      <h2 className={`flex gap-2 pt-7 pb-3`}>
        <HistoryIcon /> <span className="text-accent3">History</span>
      </h2>
      <form className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-[256px]">
            <SelectValue placeholder="Sick" />
            <Button
              variant="ghost"
              className="ml-auto p-0 text-tertiary h-auto"
            >
              <XIcon />
            </Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sick">Sick</SelectItem>
            <SelectItem value="holiday">Holiday</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="extra-work">Extra Work</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="All" />
            <Button
              variant="ghost"
              className="ml-auto p-0 text-tertiary h-auto"
            >
              <XIcon />
            </Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="used-days">Used days</SelectItem>
            <SelectItem value="earned-days">Earned days</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-44 ml-auto text-base">
            <SelectValue placeholder="Balance History" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="balance">Balance History</SelectItem>
            <SelectItem value="last">Show Last</SelectItem>
            <SelectItem value="first">Show First</SelectItem>
          </SelectContent>
        </Select>
      </form>
    </section>
  );
}
