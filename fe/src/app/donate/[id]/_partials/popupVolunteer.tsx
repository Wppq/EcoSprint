import axios from 'axios';
import { useRouter } from 'next/navigation';

interface PopupVolunteerProps {
  handleClosePopup: () => void;
  setShowPopup: (show:Boolean) => void;
  id: string;
}
export function PopupVolunteer({
  handleClosePopup,
  setShowPopup,
  id,
}: PopupVolunteerProps) {
  const router = useRouter();
  const handleJoinAction = async () => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }
    const updateDataUser = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const response = await axios.post(
          'http://localhost:8000/api/volunteer',
          {
            id: id,
          },
          config,
        );
        if (response.status == 201) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error(error);
      }
    };
    updateDataUser();
    setShowPopup(false);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Konfirmasi</h2>
        <p className="mb-4">Apakah Anda yakin ingin bergabung dalam aksi?</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={handleClosePopup}
          >
            Batal
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={handleJoinAction}
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}
