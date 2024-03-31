'use client';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { Auth } from './_partials/auth';

export default function Dashboard() {
//   const localStorageRole = localStorage.getItem('role');
//   const [role, setRole] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (localStorageRole) {
//       setRole(localStorageRole);
//     } else {
//       router.push('/login');
//     }
//   }, [localStorageRole, router]);

//   if (!role) {
//     return null;
//   }

  return <Auth role={"user"} />;
}

