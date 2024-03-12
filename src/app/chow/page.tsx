import { getChow, getSession } from '@/app/actions';
import { redirect } from 'next/navigation';
import React from 'react';
import ClientComponent from './ClientComponent';

const page = async () => {
  const session = await getSession();
  if (!session) redirect('/');

  const foodItems = await getChow(session.token);

  return <ClientComponent food={foodItems}></ClientComponent>;
};

export default page;
