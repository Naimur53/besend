import Link from 'next/link';
import React from 'react';

const code = () => {
    return (
        <div className='mt-[32px] pb-10'>
            <div className="container ">
                <div className=' mx-auto flex justify-center relative'>
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
                    <div className='w-[538px]'>
                        <div className='text-center text-main-black'>
                            <h2 className='text-base mb-[20px] font-normal'>Войдите в личный кабинет</h2>
                            <p className='text-sm'>Мы отправили СМС на номер +7 (323) 434 64 33. <br /> Обычно оно приходит в течение минуты.</p>
                        </div>

                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default code;