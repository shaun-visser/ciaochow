import Image from 'next/image';
import React from 'react';
import RegistrationForm from '../components/organisms/Forms/RegistrationForm';

const page = async () => {
  return (
    <>
      <div className="-mt-[150px] flex gap-5 justify-between items-end relative z-20 px-5">
        <h1 className="text-primary-text tracking-[.37px] font-bold">
          Register
        </h1>
        <Image
          alt="lady"
          width={129}
          height={316}
          className="ml-auto mt-[180px] -mb-[130px] h-auto mr-4"
          src="lady.svg"
        />
      </div>
      <div className="bg-secondary-background text-secondary-text pt-[130px] px-5 pb-11">
        <RegistrationForm />
      </div>
    </>
  );
};

export default page;
