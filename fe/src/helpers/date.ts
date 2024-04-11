function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const monthNames: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  const year: number = date.getFullYear();
  return `${day} ${monthNames[monthIndex]} ${year}`;
}

function calculateDateDifference(targetDate: string): number {
  const targetDateTime = new Date(targetDate);
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - targetDateTime.getTime();
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );
  return Math.abs(differenceInDays);
}

export { formatDate, calculateDateDifference };
