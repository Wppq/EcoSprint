import { PlanttingContent } from '@/../public/assets/img/content';
import Image from 'next/image';

const data = [
  {
    title: 'Logo BRI',
    image: PlanttingContent,
    description:
      'Mengurangi Emisi Karbon pohon menyerap karbon alami, membantu melawan perubahan iklim.',
  },
  {
    title: 'Logo BNI',
    image: PlanttingContent,
    description:
      'Meningkatkan Kualitas Udara pohon menghasilkan oksigen, meningkatkan kualitas udara di sekitar kita.',
  },
  {
    title: 'Logo BCA',
    image: PlanttingContent,
    description:
      'Peningkatan Keanekaragaman Hayati menanam pohon memperluas area hijau, mendukung keanekaragaman hayati.',
  },
  {
    title: 'Logo Mandiri',
    image: PlanttingContent,
    description:
      'Pemulihan Ekosistem pohon membantu menjaga kestabilan tanah dan siklus air.',
  },
];

export function Reason(){
  return (
    <section data-cy="scheduled-section">
      <svg width="100%" height="100%" id="svg" viewBox="0 50 1440 390">
        <path
          d="M0,160L40,144C80,128,160,96,240,96C320,96,400,128,480,149.3C560,171,640,181,720,165.3C800,149,880,107,960,101.3C1040,96,1120,128,1200,133.3C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          stroke="none"
          strokeWidth="0"
          fill="#C1D937"
          fillOpacity="0.5"
        ></path>
        <path
          d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,197.3C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          stroke="none" 
          strokeWidth="0"
          fill="#C1D937"
          fillOpacity="1"
        ></path>
      </svg>
      <div className="bg-gradient-to-b from-[#C1D937]  to-[#245f0e] relative w-full py-1 mt-[-180px]">
        <div className="relative flex mx-auto overflow-hidden flex-col items-center justify-center w-full h-full sm:gap-12 gap-10 md:gap-[72px] py-10 my-10 px-10 md:px-10 lg:px-[100px] max-w-[1000px]">
          <h2 className="font-bold text-4xl">
            Mengapa Kita Harus Menanam Pohon?
          </h2>
          <div className="flex flex-col gap-14 w-[90%]">
            {data.map((item, index) =>
              index % 2 == 0 ? (
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <Image
                    data-cy="planting-img"
                    src={item.image}
                    className="w-[45%] rounded-md"
                    alt="Tree Planting"
                  />
                  <div className="flex flex-col items-center gap-4 md:items-start pl-8">
                    <p className="text-base text-center md:text-lg md:text-start">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
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
              ),
            )}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#245f0e"
          fillOpacity="0.5"
          d="M0,64L26.7,90.7C53.3,117,107,171,160,181.3C213.3,192,267,160,320,170.7C373.3,181,427,235,480,224C533.3,213,587,139,640,133.3C693.3,128,747,192,800,192C853.3,192,907,128,960,112C1013.3,96,1067,128,1120,154.7C1173.3,181,1227,203,1280,192C1333.3,181,1387,139,1413,117.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
        <path
          fill="#245f0e"
          fillOpacity="1"
          d="M0,160L20,176C40,192,80,224,120,234.7C160,245,200,235,240,208C280,181,320,139,360,128C400,117,440,139,480,128C520,117,560,75,600,90.7C640,107,680,181,720,186.7C760,192,800,128,840,101.3C880,75,920,85,960,112C1000,139,1040,181,1080,186.7C1120,192,1160,160,1200,138.7C1240,117,1280,107,1320,112C1360,117,1400,139,1420,149.3L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};
