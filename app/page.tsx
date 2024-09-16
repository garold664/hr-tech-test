import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { Inter } from 'next/font/google';

const inter = Inter({ weight: ['400', '500', '600'], subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Nav />
      <Header />
    </div>
  );
}
