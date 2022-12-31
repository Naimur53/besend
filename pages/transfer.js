import Link from 'next/link';
import React from 'react';
import TransferMainCon from '../components/TransferMainCon/TransferMainCon';

const Transfer = () => {
    return (
        <div className='mt-[32px]'>
            <div className="container ">
                <div className=' mx-auto flex justify-center relative'>
                    <div >
                        <h2 className='text-base text-center mb-[24px]'>Новый перевод</h2>

                        {/* stepper */}
                        <div className='flex gap-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <div className=''>

                                    <div className='inline-flex justify-center items-center text-center font-normal text-ls text-white w-[24px] h-[24px] rounded-full bg-[#A0ABBB] mr-[8px]'><span>1</span></div>
                                    <span className='text-ls text-[#64748B]'>Сумма и страны</span>
                                </div>
                                <hr className='border-[#64748B] w-[54px]' />
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <div className=''>

                                    <div className='inline-flex justify-center items-center text-center font-normal text-ls text-white w-[24px] h-[24px] rounded-full bg-[#A0ABBB] mr-[8px]'><span>2</span></div>
                                    <span className='text-ls text-[#64748B]'>Сумма и страны</span>
                                </div>
                                <hr className='border-[#64748B] w-[54px]' />
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <div className=''>

                                    <div className='inline-flex justify-center items-center text-center font-normal text-ls text-white w-[24px] h-[24px] rounded-full bg-[#36CFA1] mr-[8px]'><span>3</span></div>
                                    <span className='text-ls text-[#30B68D]'>Сумма и страны</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='absolute right-[19px] top-[16%]'>
                        <Link href='/'>

                            <img src="/images/close.png" alt="close" />
                        </Link>
                    </button>
                </div>
                <div className='max-w-[908px]  mx-auto mt-[40px]'>

                    <div className='p-[16px] flex justify-between bg-[#FFFBEB] rounded-[8px]'>
                        <div className='flex gap-[10px] items-center'>
                            <img src="/images/clock-yellow.png" alt="clock" />
                            <p>Переведите 3 000₽ по реквизитам агента в течении 29:57</p>
                        </div>
                        <div className='flex gap-[8px]'>
                            <button className='panel_button whitespace-nowrap ! px-[20px] gray'>Не получилось</button>
                            <button className='panel_button whitespace-nowrap !px-[20px]'>Я перевёл</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-[12px]">
                        <div>
                            <TransferMainCon></TransferMainCon>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transfer;