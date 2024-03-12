'use server';
import { LoginForm, RegistrationForm } from '@/@interfaces/typesAndEnums';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const key = new TextEncoder().encode(process.env.SECRET_KEY);

export async function registerAction(formData: RegistrationForm) {
  try {
    const response = await fetch(
      'https://ciaochow.plusnarrative.biz/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    if (!response.ok) {
      console.log(response);
      return { message: `Something went wrong`, success: false };
    }
    return { message: '', success: true };
  } catch (e: any) {
    return { message: e.message, success: false };
  }
}

export async function loginAction(formData: LoginForm) {
  try {
    const postData = {
      identifier: formData.email,
      password: formData.password,
    };

    const response = await fetch(
      'https://ciaochow.plusnarrative.biz/api/auth/local',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        credentials: 'include',
      }
    );

    if (!response.ok) {
      return {
        message: `Make sure email address and password are correct or register below`,
        success: false,
      };
    }

    const responseBody = await response.json();
    const token = responseBody.jwt;
    // const user = { email: formData.email };

    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ token, expires });
    // Save the session in a cookie
    cookies().set('session', session, { httpOnly: true });
  } catch (e: any) {
    throw e;
  }
  redirect('/chow');
}

export async function logoutAction() {
  cookies().set('session', '', { expires: new Date(0) });
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 week from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get('session')?.value;

  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function getChow(token: string) {
  const response = await fetch(
    'https://ciaochow.plusnarrative.biz/api/chows?populate=*',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const responseBody = await response.json();
  return responseBody.data;
}
