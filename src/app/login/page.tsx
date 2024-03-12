import Image from 'next/image';
import React from 'react';
import LoginForm from '../components/organisms/Forms/LoginForm';

const page = () => {
  return (
    <>
      <div className="-mt-[166px] flex gap-5 justify-between items-end relative z-20 px-5">
        <h1 className="text-primary-text tracking-[.37px] font-bold">Login</h1>
        <Image
          alt="man"
          width={158}
          height={317}
          className="ml-auto mt-[180px] -mb-[130px] h-auto mr-4"
          src="man.svg"
        />
      </div>
      <div className="bg-secondary-background text-secondary-text pt-[130px] px-5 pb-11">
        <LoginForm />
      </div>
    </>
  );
};

export default page;
