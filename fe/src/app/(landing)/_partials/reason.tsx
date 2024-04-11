'use client';
import {
  EmitionPhoto,
  AirPhoto,
  HayatiPhoto,
  TreesPhoto,
} from '@/../public/assets/img/content';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    image: EmitionPhoto,
    description:
      'Mengurangi Emisi Karbon pohon menyerap karbon alami, membantu melawan perubahan iklim.',
  },
  {
    image: AirPhoto,
    description:
      'Meningkatkan Kualitas Udara pohon menghasilkan oksigen, meningkatkan kualitas udara di sekitar kita.',
  },
  {
    image: HayatiPhoto,
    description:
      'Peningkatan Keanekaragaman Hayati menanam pohon memperluas area hijau, mendukung keanekaragaman hayati.',
  },
  {
    image: TreesPhoto,
    description:
      'Pemulihan Ekosistem pohon membantu menjaga kestabilan tanah dan siklus air.',
  },
];

export function Reason() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section data-cy="scheduled-section" id='solutions'>
      <div className="relative w-full">
        <div className="relative flex mx-auto overflow-hidden flex-col items-center justify-center w-full h-full sm:gap-12 gap-10 md:gap-[72px] py-10 my-10 px-10 md:px-10 lg:px-[100px] max-w-[1000px] bg-eco rounded-xl">
          <h2 className="font-bold text-4xl mb-[-50px]">
            Mengapa Kita Harus Menanam Pohon?
          </h2>
          <div className="w-full">
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div className="px-20" key={index}>
                    <div className="flex flex-col items-center justify-center md:flex-row">
                      <div className="flex flex-col items-center gap-4 md:items-start pr-8">
                        <p className="text-base text-center md:text-lg md:text-start">
                          {item.description}
                        </p>
                      </div>
                      <Image
                        data-cy="planting-img"
                        src={item.image}
                        className="w-[45%] rounded-md"
                        alt="Tree Planting"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
