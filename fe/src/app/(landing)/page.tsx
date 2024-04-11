import { Navbar } from '@/components/navbar/navbar';
import { Hero } from './_partials/hero';
import { GeneralInformation } from './_partials/generalInformation';
import { Reason } from './_partials/reason';
import { Footer } from '@/components/footer/footer';
import { Rank } from './_partials/rank';

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Hero />
        <GeneralInformation />
        <Reason/>
        <Rank/>
        <Footer/>
    </main>
  );
}
