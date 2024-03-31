import { Navbar } from '@/components/navbar/navbar';
import { Hero } from './_partials/hero';
import { PaymentMethod } from './_partials/payment';
import { Reason } from './_partials/reason';

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Hero />
        <PaymentMethod />
        <Reason/>
    </main>
  );
}
