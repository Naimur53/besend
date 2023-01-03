import Link from 'next/link';
import React from 'react';
import Chat from '../components/Chat/Chat';
import LogoAndCloseNav from '../components/LogoAndCloseNav/LogoAndCloseNav';

const mobileChat = () => {
    return (
        <div>
            <LogoAndCloseNav></LogoAndCloseNav>
            <div className='mt-[99px] md:mt-[32px] pb-10'>
                <div className="container px-[16px]">
                    <h2 className='text-normal block font-medium md:hidden text-left md:text-center mb-[24px]'>Новый перевод</h2>
                    <div className=' md:mx-auto flex justify-center relative'>
                        <div >
                            <h2 className='text-base hidden md:block text-left md:text-center mb-[24px]'>Новый перевод</h2>

                            {/* stepper for large device*/}
                            <div className='hidden md:flex gap-[2px] md:gap-[12px]'>
                                <div className='flex items-center gap-[2px] md:gap-[8px]'>
                                    <div className='relative'>

                                        <div className='step_count'><span>1</span></div>
                                        <span className='step_text'>Сумма и страны</span>
                                    </div>
                                    <hr className='step_border' />
                                </div>
                                <div className='flex items-center gap-[2px] md:gap-[8px]'>
                                    <div className='relative'>

                                        <div className='step_count'><span>2</span></div>
                                        <span className='step_text'>Получатель</span>
                                    </div>
                                    <hr className='step_border' />
                                </div>
                                <div className='flex items-center gap-[2px] md:gap-[8px]'>
                                    <div className='relative '>

                                        <div className='step_count active '><span>3</span></div>
                                        <span className='step_text '>Отправка</span>
                                    </div>
                                </div>
                            </div>
                            {/* stepper for small device*/}
                            <div className='grid md:hidden grid-cols-3'>
                                <div className='flex flex-col items-end'>
                                    <div className='flex gap-[4px] items-center'>
                                        <div className='step_count '>
                                            <span>1</span>

                                        </div>
                                        <hr className='step_border' />

                                    </div>
                                    <div className='step_text w-full'>Сумма и страны</div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='flex items-center gap-[4px]'>
                                        <hr className='step_border' />

                                        <div className='step_count '>
                                            <span>2</span>

                                        </div>
                                        <hr className='step_border' />

                                    </div>
                                    <div className='step_text'>Получатель</div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className='flex items-center  gap-[4px]'>
                                        <hr className='step_border' />

                                        <div className='step_count active'>
                                            <span>3</span>

                                        </div>

                                    </div>
                                    <div className='step_text text-center w-full active'>Отправка</div>
                                </div>

                            </div>
                        </div>
                        <button className='hidden md:block absolute right-[19px] top-[16%]'>
                            <Link href='/'>

                                <img src="/images/close.png" alt="close" />
                            </Link>
                        </button>
                    </div>
                    <div className='max-w-[908px]  mx-auto  mt-[24px] md:mt-[40px]'>

                        <div className='p-[16px] flex justify-between bg-[#FFFBEB] rounded-[8px]'>
                            <div className='flex gap-[10px] items-start md:items-center '>
                                <img src="/images/clock-yellow.png" alt="clock" />
                                <p>Переведите 3 000₽ по реквизитам агента в течении 29:57</p>
                            </div>
                            <div className='hidden md:flex gap-[8px]'>
                                <button className='panel_button whitespace-nowrap ! px-[20px] gray'>Не получилось</button>
                                <button className='panel_button whitespace-nowrap !px-[20px]'>Я перевёл</button>
                            </div>
                        </div>
                        <div className='mt-[12px] flex text-[14px] leading-[20p]'>
                            <Link href='/transfer'>
                                <div className='min-w-[168px] py-[8px]  inline-block'>
                                    <p>Информация о переводе</p>
                                </div>
                            </Link>
                            <div className=' text-center  whitespace-nowrap w-full py-[8px] text-main-green border-b border-main-green'>
                                <p>Чат с агентом</p>
                            </div>

                        </div>
                        <div className='mt-[12px]'>
                            <Chat></Chat>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default mobileChat;