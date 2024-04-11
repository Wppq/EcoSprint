import { FormRegister } from './_partials/form';

export default function Register() {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: 'url("/assets/img/heros/hero-register.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 flex text-center justify-center items-center bg-black/40">
        <div className="bg-white/80 p-20 rounded-lg">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-2xl font-bold">Create an Account</h1>
              <p className="mt-2 text-gray-600">
                Please fill in the following details to create your account.
              </p>
            </div>
            <FormRegister/>
          </div>
        </div>
      </div>
    </div>
  );
}
