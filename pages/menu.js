import React from 'react';
import PanelTopBar from '../components/PanelMain/smallCompo/PanelTopBar';

const Menu = () => {
    return (
        <div>
            <PanelTopBar activePath='menu'></PanelTopBar>
            <div className={` transition-all w-full top-[67px] py-[24px] px-[16px] pb-[100px]`}>
                <div className='flex justify-between items-center mb-[56px]'>
                    <div>
                        <h1 className='text-[32px] font-extrabold'>Вадим</h1>
                        <a href='tel:+7 999 999 99 99' className='text-main-black text-ls font-sans'>+7 999 999 99 99</a>

                    </div>
                    <img src="/images/right_dark.svg" alt="right" />
                </div>
                <div className='pb-[38px] text-ls border-b border-[#E7EAEE]'>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/option/card.svg" className='w-[16px]' alt="icons" />
                            <span>Способы оплаты</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/option/users.svg" className='w-[16px]' alt="icons" />
                            <span>Получатели</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/option/gear.svg" className='w-[16px]' alt="icons" />
                            <span>Уведомления</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/dark-world.svg" className='w-[16px]' alt="icons" />
                            <span>Язык</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                </div>
                <div>
                    <div className='py-[16px] text-ls flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <span>Ответы на вопросы</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                    <div className='py-[16px] text-ls flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <span>Оставить отзыв</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                    <div className='py-[16px] text-ls flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <span>Сообщить о проблеме</span>
                        </a>
                        <img src="/images/right_dark.svg" alt="right" />

                    </div>
                </div>
                <div className="mt-[22px]">
                    <button className='panel_button gray flex justify-center !py-[10px] !px-[12px]'>
                        <div className='flex gap-[10px] items-center'>

                            <img src="/images/out.svg" className='h-[12px]' alt="" />
                            <span className='text-[14px] leading-[20px]'>Выйти</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Menu;