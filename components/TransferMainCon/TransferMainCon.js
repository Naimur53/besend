import React from 'react';
import CustomAccrodian from '../CustomAccrodian/CustomAccrodian';

const TransferMainCon = () => {
    return (
        <div>
            <div className='p-[16px] rounded-[16px] bg-white'>
                <div className='flex justify-between'>
                    <h1 className='text-sm text-main-black text-semibold'>Реквизиты агента</h1>
                    <p className='text-[#30B68D] text-[18px] text-normal leading-[22px]'>Кто такой агент?</p>
                </div>
                <div className='mt-[16px] mb-[23px]'>
                    <p>
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
                    <h1 className='text-sm text-main-black text-semibold'>Информация по сделке</h1>
                </div>
                <div className='mt-[16px] mb-[19px] text-ls  text-main-black'>
                    <div className='py-[8px] flex justify-between items-center'>
                        <h5>Сколько</h5>
                        <p className='text-black'>10 000 ₽</p>
                    </div>
                    <div className='py-[8px] flex justify-between items-center'>
                        <h5 className='text-main-black'>Получатель платежа</h5>
                        <div className='text-right'>
                            <p>+7 999 999 99 99</p>
                            <p className='font-medium text-[#64748B] text-xs'>Серега</p>

                        </div>
                    </div>
                    <div className='py-[8px] flex justify-between items-center'>
                        <h5>Сколько получит получатель</h5>
                        <p className='text-main-black'>~3 000 ₴</p>
                    </div>

                </div>
                <div>
                    <CustomAccrodian heading='Свернуть' defaultValue={true}>
                        <div className='pb-[8px] flex justify-between items-center'>
                            <h5>Откуда</h5>
                            <div className='text-black'>
                                <span>из</span>
                                <img src="images/flag1.png" className='w-[20px] inline-block ml-[7px] mr-[4px] rounded-[5px]' alt="flag" />
                                <span>России</span>
                            </div>
                        </div>
                        <div className='py-[8px] flex justify-between items-center'>
                            <h5>Куда</h5>
                            <div className='text-black'>
                                <span>в</span>
                                <img src="images/flag2.png" className='w-[20px] inline-block ml-[7px] mr-[4px] rounded-[5px]' alt="flag" />
                                <span>Украину</span>
                            </div>
                        </div>
                        <div className='py-[8px] flex justify-between items-center'>
                            <div>
                                <h5>Курс</h5>
                                <p className='text-medium text-xs text-[#64748B]'>На 12 марта, 2022, 14:45</p>
                            </div>
                            <p className='text-black'>1,8764</p>
                        </div>
                        <div className='py-[8px] flex justify-between items-center'>
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
            <div className='mt-[12px] text-ls text-[#64748B] font-normal'>
                <p>Как только агент получит платеж, он отправит деньги получателю и он сможет получить перевод в личном кабинете</p>
                <p className='mt-[12px]'>В некоторых случаях агент может попросить отправить чек или другое подтверждение. В этом случае вы получите уведомление и сможете прикрепить подтверждения в чате</p>
            </div>
        </div>
    );
};

export default TransferMainCon;