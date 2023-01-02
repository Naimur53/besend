import Link from 'next/link';
import React from 'react';
import CodeInputs from '../components/CodeInputs/CodeInputs';
import LogoAndCloseNav from '../components/LogoAndCloseNav/LogoAndCloseNav';

const code = () => {
    return (
        <div>
            <LogoAndCloseNav></LogoAndCloseNav>
            <div className='mt-[137px] md:mt-[32px] pb-10'>
                <div className="container ">
                    <div className=' mx-auto hidden md:flex justify-center relative'>
                        <div >
                            <Link href='/'>
                                <img className='pointer' src="/images/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <button className='absolute right-[19px] top-[16%]'>
                            <Link href='/'>

                                <img src="/images/close.png" alt="close" />
                            </Link>
                        </button>
                    </div>
                    <div className='flex justify-center mt-[72px] '>
                        <div className='w-auto md:w-[538px]'>
                            <div className='md:text-center text-main-black'>
                                <h2 className='text-normal md:text-base mb-[20px] font-normal'>Войдите в личный кабинет</h2>
                                <p className='text-ls md:text-sm'>Мы отправили СМС на номер <br className='block md:hidden' /> +7 (323) 434 64 33. <br /> Обычно оно приходит в течение минуты.</p>
                            </div>

                            <CodeInputs></CodeInputs>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default code;