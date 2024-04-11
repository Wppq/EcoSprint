import Image from 'next/image';
import { HeroLanding } from '@/../public/assets/img/heros';
import Link from 'next/link';

export function Hero(){
  return (
    <section className="relative">
      <Image
        className="w-full"
        alt="Hero Landing"
        src={HeroLanding}
        draggable={false}
      />
      <div className="absolute inset-0 flex text-center justify-center items-center">
        <div className="absolute top-36 max-w-5xl mx-auto px-4">
          <h2 className="font-bold md:text-5xl my-10 ">
            Mari Bergabung dalam <br /> Perjalanan untuk Menjaga Bumi Kita!
          </h2>
          <h4 className="text-sm md:text-xl font-semibold">
            Mulailah sekarang, tanamkan pohon virtualmu dan lihatlah bagaimana
            aksi nyata kita membentuk masa depan yang lebih hijau untuk generasi
            mendatang. Ayo, ayo bergabung!
          </h4>
          <div className='mt-20 md:mt-20 mb-6'>
            <Link
              href={'/donate'}
              className="rounded-xl px-14 p-4 bg-black text-center hover:bg-gray-800 text-white md:text-base lg:text-lg font-bold"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
