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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tableData, tableHeaders } from '@/data/data';

export default function HistorySection() {
  return (
    <section>
      <h2 className={`flex gap-2 pt-7 pb-3`}>
        <HistoryIcon /> <span className="text-accent3">History</span>
      </h2>
      <form className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-[256px]" withEraseBtn={true}>
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
      <Table className="mt-4">
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
    </section>
  );
}
