import Link from 'next/link';
import { Donation } from '@/models/donation';

interface CardDonationProps {
  donate: Donation;
}

export function CardDonation({ donate }: CardDonationProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-40 object-cover"
        src={donate.image}
        alt={donate.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{donate.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{donate.description}</p>
        <p className="mt-2 text-sm text-gray-600">
          Exp Date: {donate.exp_date}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Collected Trees: {donate.collected_trees}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Trees Required: {donate.tree_required}
        </p>
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
