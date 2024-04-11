'use client';
import { useRouter } from 'next/navigation';
import { Auth } from './_partials/auth';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [authCheck,setAuthCheck] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
      if (!localStorage.getItem('role')) {
        router.push('/login');
      }
    }
    setTimeout(() => {
      setAuthCheck(true)
    }, 500);
  },[authCheck])

  if(!authCheck){
    return <h1>Loading</h1>
  }

  return <Auth role={localStorage.getItem('role')} />;
}
