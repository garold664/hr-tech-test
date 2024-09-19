import Link from 'next/link';
import Card from '@/components/Card';

import PhoneIcon from '@/assets/icons/phone.svg';
import MailIcon from '@/assets/icons/mail.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import HashIcon from '@/assets/icons/hash.svg';
import PeopleIcon from '@/assets/icons/people.svg';
import GlobeIcon from '@/assets/icons/globe.svg';
import MapPinIcon from '@/assets/icons/map-pin.svg';
import CircleUser from '@/assets/icons/circle-user.svg';

export default function SideBar() {
  return (
    <aside className="layout-aside -mt-4 hidden xl:block">
      <Card>
        <a
          href="tel:07911 654321"
          className=" flex text-nowrap gap-2 hover:text-accent mb-3"
        >
          <PhoneIcon /> 07911 654321
        </a>
        <a
          href="mailto:avd.yana@videorollnet"
          className=" flex text-nowrap gap-2 hover:text-accent mb-3"
        >
          <MailIcon className="shrink-0" /> avd.yana@videorollnet
        </a>
        <div className="flex items-center gap-x-4">
          <a href="" className="hover:text-accent">
            <InstagramIcon />
          </a>
          <a href="" className="hover:text-accent">
            <FacebookIcon />
          </a>
          <a href="" className="hover:text-accent">
            <TwitterIcon />
          </a>
        </div>
      </Card>
      <Card>
        <h2 className="mb-4">Hire Date</h2>
        <p className="">Sep. 3, 2020</p>
        <p className="">3y - 9m - 20d</p>
      </Card>
      <Card>
        <ul>
          <li className="flex items-center mb-1 gap-2">
            <HashIcon /> 5
          </li>
          <li className="flex items-center mb-1 gap-2">
            <ClockIcon /> Full-Time
          </li>
          <li className="flex items-center mb-1 gap-2">
            <PeopleIcon /> Operations
          </li>
          <li className="flex items-center mb-1 gap-2">
            <GlobeIcon /> Europe
          </li>
          <li className="flex items-center mb-1 gap-2">
            <MapPinIcon /> London, UK
          </li>
        </ul>
      </Card>
      <Card>
        <h2 className="mb-3">Direct Reports</h2>
        <ul>
          <li>
            <Link
              href=""
              className="flex items-center mb-1 gap-2 hover:text-accent"
            >
              <CircleUser /> Shane
            </Link>
            <Link
              href=""
              className="flex items-center mb-1 gap-2 hover:text-accent"
            >
              <CircleUser /> Nathan
            </Link>
            <Link
              href=""
              className="flex items-center mb-1 gap-2 hover:text-accent"
            >
              <CircleUser /> Mitchel
            </Link>
            <Link
              href=""
              className="flex items-center mb-1 gap-2 hover:text-accent"
            >
              <CircleUser /> Philip
            </Link>
            <Link
              href=""
              className="flex items-center mb-1 gap-2 hover:text-accent"
            >
              <PeopleIcon /> 4 More...
            </Link>
          </li>
        </ul>
      </Card>
    </aside>
  );
}
