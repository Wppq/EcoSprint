import Link from 'next/link';
import { Donation } from '@/models/donation';
import Image from 'next/image';
import { calculateDateDifference } from '@/helpers/date';

interface CardDonationProps {
  donate: Donation;
}

export function CardDonation({ donate }: CardDonationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:border-2">
      <Image
        className="w-full h-60 object-cover p-2 rounded-3xl"
        src={donate.image}
        alt={donate.title}
        draggable={false}
        width={220}
        height={140}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{donate.title}</h2>
        <div className='pt-2 rounded-lg p-2 text-sm text-gray-600'>
          {donate.description.length > 150? donate.description.slice(0,150)+ "..." : donate.description}
        </div>
        <div className="w-full bg-gray-200 text-center rounded-lg mt-2 py-4 flex">
          <div className='w-1/2'>
            <p className='font-extrabold text-2xl p-2'>{calculateDateDifference(donate.date_line)}</p>
            <p className='text-xs font-'>Hari lagi</p>
          </div>
          <div className='w-1/2'>
            <p className='font-extrabold text-2xl p-2'>
              {donate.collected_trees}/{donate.tree_required}
            </p>
            <p className='text-xs'>Pohon terkumpul</p>
          </div>
        </div>
        <Link
          href={`/donate/${donate.id}`}
          className="block mt-4 text-sm bg-eco text-center hover:bg-black hover:text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          <p>More Information</p>
        </Link>
      </div>
    </div>
  );
}
