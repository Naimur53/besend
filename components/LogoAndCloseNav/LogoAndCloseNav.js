import Link from 'next/link';
import React from 'react';

const LogoAndCloseNav = () => {
    return (
        <div className='flex md:hidden fixed w-full top-0 left-0 right-0 bg-main-white z-20 justify-between items-center p-[16px] border-b border-[#E7EAEE]'>
            <Link href='/'>

                <img src="/images/logo.png" alt="logo" />
            </Link>
            <Link href='/'>

                <img src="/images/close.png" alt="close" />
            </Link>

        </div>
    );
};

export default LogoAndCloseNav;