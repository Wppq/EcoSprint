export function Transaction() {
  return (
    <section className="space-y-2" >
      <div className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl">
        <div className="p-4 px-10 flex space-x-4">
          <div className="w-full">
            <p>Pembaruan kawasan hutan di sekitaran laut dengan...</p>
          </div>
          <div className="w-1/5 text-center text-sm">
            <p className="text-yellow-500">Belum Bayar</p>
          </div>
          <div className="w-1/6">
            <p className="text-yellow-500">80.000</p>
          </div>
        </div>
      </div>
      {[1, 2, 3, 4, 5].map(() => (
        <div className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl">
          <div className="p-4 px-10 flex space-x-4">
            <div className="w-full">
              <p>Pembaruan kawasan hutan di sekitaran laut dengan...</p>
            </div>
            <div className="w-1/5 text-center text-sm">
              <p className="text-green-500">Berhasil</p>
            </div>
            <div className="w-1/6">
              <p className="text-green-500">27.000</p>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl">
        <div className="p-4 px-10 flex space-x-4">
          <div className="w-full">
            <p>Pembaruan kawasan hutan di sekitaran laut dengan...</p>
          </div>
          <div className="w-1/5 text-center text-sm">
            <p className="text-red-500">Gagal</p>
          </div>
          <div className="w-1/6">
            <p className="text-red-500">80.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
