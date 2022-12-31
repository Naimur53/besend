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
                    <div>
                        <CustomAccrodian heading='3er'>dfdfd</CustomAccrodian>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferMainCon;