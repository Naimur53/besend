import React from 'react';
import CustomAccrodian from '../CustomAccrodian/CustomAccrodian';

const TransferMainCon = () => {
    return (
        <div>
            <div className='p-[16px] rounded-[16px] pb-[22px] md:pb-[16px] bg-white'>
                <div className='flex justify-between'>
                    <h1 className='text-ls md:text-sm text-main-black text-semibold'>Реквизиты агента</h1>
                    <p className='text-[#30B68D] text-[14px] md:text-[18px] leading-[22px]'>Кто такой агент?</p>
                </div>
                <div className='md:mt-[16px] my-[12px] md:mb-[23px]'>
                    <p className='text-ls md:text-sm leading-[20px] md:leading-[28px]'>
                        Сергей А. <br />
                        2202 2023 0705 0082 <br />
                        Комментарий “Возврат займа”
                    </p>

                </div>
                <div>
                    <CustomAccrodian heading='Подробнее об агенте'></CustomAccrodian>

                </div>
            </div>
            <div className='p-[16px] mt-[12px] rounded-[16px] bg-white'>
                <div className='flex justify-between'>
                    <h1 className='text-ls md:text-sm text-main-black text-semibold'>Информация по сделке</h1>
                </div>
                <div className='mt-[10px] md:mt-[16px] mb-[12px] md:mb-[19px] text-[14px] leading-[20px] md:text-ls  text-main-black'>
                    <div className='py-[6px] md:py-[8px] flex justify-between items-center'>
                        <h5>Сколько</h5>
                        <p className='text-black'>10 000 ₽</p>
                    </div>
                    <div className='py-[6px] md:py-[8px] flex justify-between items-center'>
                        <h5 className='text-main-black'>Получатель платежа</h5>
                        <div className='text-right'>
                            <p>+7 999 999 99 99</p>
                            <p className='font-medium text-[#64748B] text-xs'>Серега</p>

                        </div>
                    </div>
                    <div className='py-[6px] md:py-[8px] flex justify-between items-center'>
                        <h5>Сколько получит получатель</h5>
                        <p className='text-main-black'>~3 000 ₴</p>
                    </div>

                </div>
                <div>
                    <CustomAccrodian heading='Свернуть' defaultValue={true}>
                        <div className='md:pb-[8px] pb-[6px] flex justify-between items-center text-[14px] text-ls'>
                            <h5 className=''>Откуда</h5>
                            <div className='text-black'>
                                <span>из</span>
                                <img src="images/flag1.png" className='w-[20px] inline-block ml-[7px] mr-[4px] rounded-[5px]' alt="flag" />
                                <span>России</span>
                            </div>
                        </div>
                        <div className='py-[6px] md:py-[8px] flex justify-between items-center text-[14px] text-ls'>
                            <h5>Куда</h5>
                            <div className='text-black'>
                                <span>в</span>
                                <img src="images/flag2.png" className='w-[20px] inline-block ml-[7px] mr-[4px] rounded-[5px]' alt="flag" />
                                <span>Украину</span>
                            </div>
                        </div>
                        <div className='py-[6px] md:py-[8px] flex justify-between items-center text-[14px] text-ls'>
                            <div>
                                <h5>Курс</h5>
                                <p className='text-medium text-xs text-[#64748B]'>На 12 марта, 2022, 14:45</p>
                            </div>
                            <p className='text-black'>1,8764</p>
                        </div>
                        <div className='py-[6px] md:py-[8px] flex justify-between items-center text-[14px] text-ls'>
                            <div>
                                <h5>Комиссия</h5>
                                <p className='text-medium text-xs text-[#64748B]'>Включена в сумму платежа (4%)</p>
                            </div>
                            <p className='text-black'>400 ₽</p>
                        </div>
                    </CustomAccrodian>
                </div>
            </div>
            {/* text area */}
            <div className='mt-[12px] text-[14px] leading-[20px] md:text-ls text-[#64748B] font-normal'>
                <p>Как только агент получит платеж, он отправит деньги получателю и он сможет получить перевод в личном кабинете</p>
                <p className='mt-[12px]'>В некоторых случаях агент может попросить отправить чек или другое подтверждение. В этом случае вы получите уведомление и сможете прикрепить подтверждения в чате</p>
            </div>
            <div className='flex md:hidden mt-[16px] gap-[8px]'>
                <button className='panel_button whitespace-nowrap !px-[10px] py-[18px] gray'>Не получилось</button>
                <button className='panel_button whitespace-nowrap !px-[10px] py-[18px] '>Я перевёл</button>
            </div>
        </div>
    );
};

export default TransferMainCon;