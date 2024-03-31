import {
  BankBRI,
  BankBNI,
  BankBCA,
  BankMandiri,
} from '@/../public/assets/img/logos';
import Image from 'next/image';

const data = [
  {
    title: 'Logo BRI',
    image: BankBRI,
  },
  {
    title: 'Logo BNI',
    image: BankBNI,
  },
  {
    title: 'Logo BCA',
    image: BankBCA,
  },
  {
    title: 'Logo Mandiri',
    image: BankMandiri,
  },
];

export function PaymentMethod(){
  return (
    <section className="pb-10 mt-[-40px] md:py-10 flex justify-center items-center px-[2vw] md:px-[7vw] lg:px-[12vw]">
      <div className="md:pt-6 flex sm:max-w-[calc(1280px_+_3vw)] w-full flex-wrap justify-center items-center mx-auto h-40">
        {data.map((logo, index) => (
          <div key={index} className="flex items-center gap-2 px-2 md:px-9">
            <Image
              alt={logo.title}
              src={logo.image}
              draggable={false}
              className="w-14 md:w-28"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
