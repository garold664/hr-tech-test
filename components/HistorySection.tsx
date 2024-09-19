import HistoryIcon from '@/assets/icons/history.svg';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tableData, tableHeaders } from '@/data/data';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function HistorySection() {
  return (
    <section className="w-full">
      <h2 className={`flex gap-2 pt-7 pb-3`}>
        <HistoryIcon /> <span className="text-accent3">History</span>
      </h2>
      <form className="flex items-center gap-4 flex-wrap">
        <Select>
          <SelectTrigger
            className="md:w-[256px] w-full"
            classNameForWrapper="w-full md:w-auto"
            withEraseBtn={true}
          >
            <SelectValue placeholder="Sick" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sick">Sick</SelectItem>
            <SelectItem value="holiday">Holiday</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="extra-work">Extra Work</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-24" withEraseBtn={true}>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="used-days">Used days</SelectItem>
            <SelectItem value="earned-days">Earned days</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger
            className="w-44 text-base"
            classNameForWrapper="ml-auto"
          >
            <SelectValue placeholder="Balance History" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="balance">Balance History</SelectItem>
            <SelectItem value="last">Show Last</SelectItem>
            <SelectItem value="first">Show First</SelectItem>
          </SelectContent>
        </Select>
      </form>
      <div className="flex">
        <ScrollArea type="always" className="pb-4 overflow-x-auto flex-1 w-1">
          <ScrollBar orientation="horizontal" />
          <Table className="mt-4 min-w-[800px]">
            <TableHeader className="">
              <TableRow className="bg-primary">
                {tableHeaders.map((header) => (
                  <TableHead
                    className={`px-2 py-4 pb-3 text-black ${
                      header[0] === 'date' ? 'w-[134px]' : ''
                    } ${header[0] === 'description' ? 'w-[375px]' : ''} ${
                      header[0] === 'balance' ? 'w-[140px]' : ''
                    }`}
                    key={header[1]}
                  >
                    {header[1]}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="tbody-with-space-above">
              {tableData.map((data) => (
                <TableRow className="group" key={data.id}>
                  {tableHeaders.map((header) => (
                    <TableCell
                      className="p-2 pt-[5px] pb-[6px] group-hover:bg-primary border-tertiary border-b-2"
                      key={header[1]}
                    >
                      {data[header[0]]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </section>
  );
}
