import { Hero } from './_partials/hero';
import { PaymentMethod } from './_partials/payment';
import { Reason } from './_partials/reason';

export default function Home() {
  return (
    <main>
        <Hero />
        <PaymentMethod />
        <Reason/>
    </main>
  );
}
