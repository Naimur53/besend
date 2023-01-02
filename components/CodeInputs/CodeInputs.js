import { Option, Select } from '@material-tailwind/react';
import React from 'react';
import FlagSelect from './smallCompo/FlagSelect';
import { useEffect, useRef } from 'react';

const CodeInputs = () => {
    const dark = true;
    const inputElement = useRef(null);
    useEffect(() => {
        inputElement.current?.focus();
    }, []);
    return (
        <form>
            <div className='bg-white px-[16px] py-[13px] pl-[7px] rounded-[16px] flex justify-between items-center mt-[62px]'>
                <FlagSelect></FlagSelect>
                <div className=' ml-[12px] w-full h-[28px]'>
                    <input className=' h-full text-sm text-main-black  inline-block focus-visible:outline-none w-full' type='tel' value='+7 999 999 99 99' />
                </div>

            </div>
            <p className='text-ls text-[#64748B] mt-[4px] ml-[16px]'>Мы отправим код на этот номер</p>
            <div className='mt-[44px]  text-sm text-main-black grid grid-cols-4 gap-[16px] green_cursor'>
                <div >
                    <input type="text" ref={inputElement} className='w-full bg-white rounded-[16px] h-[70px] px-[16px] py-[13px] focus-visible:outline-[#64748B]' />
                </div>
                <div >
                    <input type="text" className='w-full bg-white rounded-[16px] h-[70px] px-[16px] py-[13px] focus-visible:outline-[#64748B]' />
                </div>
                <div >
                    <input type="text" className='w-full bg-white rounded-[16px] h-[70px] px-[16px] py-[13px] focus-visible:outline-[#64748B]' />
                </div>
                <div >
                    <input type="text" className='w-full bg-white rounded-[16px] h-[70px] px-[16px] py-[13px] focus-visible:outline-[#64748B]' />
                </div>

            </div>
            <div>
                <p className='text-[#B8C0CC] text-ls mt-[30px] font-medium'>Отправить повторный код 02:57</p>
            </div>
            <div className='mt-[146px]'>
                <button className='w-full bg-[#8BD7C0] rounded-[8px] text-white text-normal py-[20px] px-[32px]'>Войти</button>
                <button className='w-full mt-[8px] bg-[#E7EAEE] rounded-[8px] text-main-black text-normal py-[20px] px-[32px]'>Изменить номер телефона</button>

            </div>
        </form>
    );
};

export default CodeInputs;