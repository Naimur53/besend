import Image from 'next/image';
import React from 'react';
import SelectLan from './smallCompo/SelectLan';

const Footer = () => {
    return (
        <div className='py-[32px] md:py-[54px] bg-main-black mt-[177px]'>
            <div className="container">
                <div className='flex flex-col md:flex-row items-start justify-between'>
                    <div className='block md:hidden'>
                        <p className='font-medium text-xs text-white mb-[44px] '>*12 минут — среднее время совершения перевода, основанное на результатах исследования 20 человек</p>
                    </div>
                    <div>
                        <div className='flex md:hidden gap-[20px] mb-[46px] '>
                            <a href="#" className='inline-block'>
                                <Image src='/images/redit.png' width={36} height={36} alt='icons'></Image>
                            </a>
                            <a href="#" className='inline-block'>

                                <Image src='/images/face.png' width={36} height={36} alt='icons'></Image>
                            </a>
                            <div className='flex gap-[6px] items-center'>
                                <a href="#" className='inline-block'>
                                    <Image src='/images/extrastar.png' width={36} height={36} alt='icons'></Image>
                                </a>
                                <a href="#" className='inline-block'>
                                    <Image src='/images/trustpilot.png' width={102} height={22} alt='icons'></Image>
                                </a>
                            </div>
                        </div>
                        <div className='md:flex hidden gap-[20px] '>
                            <a href="#" className='inline-block'>
                                <Image src='/images/gray-redit.png' width={36} height={36} alt='icons'></Image>
                            </a>
                            <a href="#" className='inline-block'>

                                <Image src='/images/gray-face.png' width={36} height={36} alt='icons'></Image>
                            </a>
                            <div className='flex gap-[6px] items-center'>
                                <a href="#" className='inline-block'>
                                    <Image src='/images/gray-extrastar.png' width={36} height={36} alt='icons'></Image>
                                </a>
                                <a href="#" className='inline-block'>
                                    <Image src='/images/trustpilot.png' width={102} height={22} alt='icons'></Image>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='text-white mb-[47px] md:mb-0'>
                        <SelectLan></SelectLan>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <p className='font-medium text-xs text-white mt-[34px] mb-[44px] '>*12 минут — среднее время совершения перевода, основанное на результатах исследования 20 человек</p>
                </div>
                <hr className='w-full h-[0px] border-t border-[#64748B]' />
                <div className='mt-[41px] md:flex justify-between text-white text-ls'>
                    <div className='flex gap-[12px] md:gap-[28px] md:flex-row flex-col'>
                        <span className=' '>Пользовательское соглашение</span>
                        <span >Политика обработки персональных данных</span>
                    </div>
                    <div className='mt-[34px] md:mt-0'>
                        <p>© 2022 Espectro Solutions SIA, Riga, Latvia</p>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;