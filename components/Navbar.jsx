"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
  // const isUserLoggedIn = true;
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, settoggleDropDown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders(); //function calling here
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link 
      href="/" 
      className='flex gap-2 flex-center'>
      <Image 
      className='object-contain' 
      src="/assets/images/quoteopialogo.png" 
      alt='logo' width={80} height={80} />
      {/* <p className='logo_text'>
        Quoteopia
      </p> */}
      </Link>

      <div className='sm:flex hidden'>
          {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
              <Link className='black_btn' href="/about">
                About
              </Link>
              <Link className='black_btn' href="/create-prompt">
                Create Post
              </Link>
              <button className='outline_btn' type="button" onClick={signOut}>
                  Sign Out
              </button>
              <Link href='/profile'>
              <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
              </Link>
            </div>
          ): ( 
          <>
          <div className='flex gap-3 md:gap-5'>
            <Link className='black_btn' href="/about">
              About
            </Link>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'>
                Sign In 
              </button>
              
            ))}
            </div>
          </>
          )}
      </div>

      {/* small screens */}

      <div className='sm:hidden flex relative'>
          {session?.user ? (
            <div className='flex'>
              <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                onClick={() => settoggleDropDown((prev) => !prev)}
              />
              {toggleDropDown && (
                <div className='dropdown'>
                  <Link 
                    href="/profile"
                    className='dropdown_link'
                    onClick={() => settoggleDropDown(false)}>
                    My Profile
                  </Link>
                  <Link 
                    href="/create-prompt"
                    className='dropdown_link'
                    onClick={() => settoggleDropDown(false)}>
                      Add Quote
                  </Link>
                  <Link 
                    href="/about"
                    className='dropdown_link'
                    onClick={() => settoggleDropDown(false)}>
                      About
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      settoggleDropDown(false);
                      signOut();
                    }}
                    className='mt-5 w-full black_btn'>
                      LogOut
                  </button>
                </div>
              )}
            </div>
          ): (
            <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'>
                  Sign In 
                </button>
              ))}
            </>
            )}
      </div>
    </nav>
  )
}

export default Navbar