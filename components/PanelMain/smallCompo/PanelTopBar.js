import React from 'react';

const PanelTopBar = () => {
    return (
        <div className='px-[30px]'>
            <div className='border-b pb-[11px] pt-[28px] border-[#E7EAEE] flex justify-between'>
                <div>
                    <h4 className='text-normal font-semibold leading-[29px]'>Главная</h4>
                </div>
                <div className='flex items-center'>
                    <div className='text-ls font-medium '>
                        <div className='w-[32px] h-[32px] rounded-full text-[#36CFA1] leading-[20px] bg-[#E5F6F1] inline-flex mr-[8px]  justify-center items-center '><span>B</span></div>
                        <span className='text-main-black font-sans'>+7 999 999 99 99</span>
                    </div>
                    <div className="ml-[40px] flex gap-[31px]">
                        <button>
                            <img src="/images/bell.png" alt="icon" />
                        </button>
                        <button>
                            <img src="/images/out.png" alt="icon " />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default PanelTopBar;