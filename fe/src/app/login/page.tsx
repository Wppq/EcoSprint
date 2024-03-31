import Image from 'next/image';
import { HeroLogin } from '@/../public/assets/img/heros';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/navbar';
import { FormLogin } from './_partials/form';

export default function Login() {
  return (
    <section>
      <Navbar/>
      <div className="flex flex-col items-center md:flex-row md:h-screen px-40">
        <div className="flex items-center justify-center w-1/2">
          <Image
            src={HeroLogin}
            alt="Login Image"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2 w-full p-20">
          <div className="w-full max-w-md space-y-8">
            <div className='text-center'>
              <h1 className="text-2xl font-bold">Welcome back!</h1>
              <p className="mt-2 text-gray-600">
                Please sign in to your account.
              </p>
            </div>
            <FormLogin/>
          </div>
          <div className="pt-4">
            <p>
              Do not have account?
              <Link
                href="/register"
                className="text-blue-600 hover:underline pl-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
