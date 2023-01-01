import React from 'react';
import { useEffect, useRef, useState } from 'react';

const Chat = () => {
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollTo(100, 100);
    }, [bottomRef]);
    return (
        <div className='h-[536px] bg-[#E7EAEE] rounded-[16px] flex flex-col justify-between'>
            {/* header */}
            <div className='p-[16px] bg-white rounded-t-[20px] chat-header-shadow'>
                <h1 className='text-sm text-main-black font-semibold'>Чат с агентом</h1>
            </div>
            {/* messages */}
            <div ref={bottomRef} className='h-full message-wrap px-[16px] py-[6px] overflow-y-scroll'>
                {
                    [...new Array(6)].map((single, i) => i).map(single => {
                        return single % 2 == 0 ? <div className='text-right py-[10px]'>
                            <div className='inline-block px-[16px] py-[12px] rounded-[8px] bg-[#D0D5DD]'>
                                <p className='text-xs  font-medium text-main-black'>Text <span className='text-[#B8C0CC] inline-block ml-[8px]'>11:45</span></p>
                            </div>
                        </div> : <div>

                            <div className='text-left py-[10px] flex items-end gap-[4px]'>
                                <div className='w-[32px] h-[32px] uppercase bg-[#E5F6F1] rounded-full text-[#36CFA1] text-[9px] leading-[10px] flex justify-center items-center font-bold'>
                                    <span>Cr</span>
                                </div>
                                <div>
                                    <p className='text-xs font-medium text-[#A0ABBB] mb-[4px]'>Name</p>
                                    <div className='inline-block px-[16px] py-[12px] rounded-[8px] bg-white'>
                                        <p className='text-xs  font-medium text-main-black'>Text <span className='text-[#B8C0CC] inline-block ml-[8px]'>11:45</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div />
                {/* from me */}

            </div>
            {/* input */}
            <div className='p-[16px]'>
                <form action="">

                    <input type="file" id="files" className='hidden' />
                    <div className='bg-white px-[16px] py-[13px] rounded-[16px] flex justify-between gap-[12px] items-center h-[70px]'>
                        <label className='min-w-[44px] h-[44px] flex justify-center items-center' htmlFor='files'><img className='w-[28px]' src="/images/attach.png" alt="" /></label>
                        <input type="text" className='w-full text-sm leading-[28px]' placeholder='Напишите сообщение..' name="" id="" />
                        <label className='min-w-[44px] h-[44px] flex justify-center items-center' htmlFor='files'><img className='w-[20px]' src="/images/send.png" alt="" /></label>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Chat;