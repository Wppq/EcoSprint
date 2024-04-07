import { useRouter } from 'next/navigation';
import AdminDashboard from '../admin/page';
import { UserDashboard } from '../user/page';

interface AuthProps {
  role: string | null;
}

export function Auth({ role }: AuthProps) {
  const router = useRouter();
  if (role === 'admin') {
    return <AdminDashboard />;
  } else if (role === 'user') {
    return <UserDashboard />;
  } else {
    localStorage.clear();
    router.push('/login');
  }
}
