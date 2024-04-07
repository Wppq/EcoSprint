export function History() {
  return (
    <>
      <div className="h-screen space-y-2">
        <div className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl text-center">
          <div className="p-4 px-10 flex space-x-4">
            <div className="w-1/6">
              <p>Volunteer</p>
            </div>
            <div className="w-full">
              <p>Pembaruan kawasan hutan di sekitaran laut dengan...</p>
            </div>
            <div className="w-1/6">
              <p className="text-green-500">+3</p>
            </div>
            <div>
              <p className="text-green-500" >selesai</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl text-center">
          <div className="p-4 px-10 flex space-x-4">
            <div className="w-1/6">
              <p>Volunteer</p>
            </div>
            <div className="w-full">
              <p>Pembaruan kawasan hutan di sekitaran laut dengan...</p>
            </div>
            <div className="w-1/6">
              <p className="text-red-500">-2</p>
            </div>
            <div>
              <p className="text-green-500" >selesai</p>
            </div>
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <div className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl text-center">
            <div className="p-4 px-10 flex space-x-4">
              <div className="w-1/6">
                <p>Donasi</p>
              </div>
              <div className="w-full">
                <p>Pembaruan kawasan hutan di sekitaran laut dengan...</p>
              </div>
              <div className="w-1/6">
                <p className="text-green-500">+1</p>
              </div>
              <div>
                <p className="text-yellow-400" >proses</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
