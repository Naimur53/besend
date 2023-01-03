import React from 'react';
import { Option, Select } from '@material-tailwind/react';

const FlagSelect = () => {
    const dark = true;
    return (
        <div className='border-r border-[#E7EAEE] pr-[10px]'>
            <div className='flex justify-center items-center '>

                <div className={`${dark ? 'select_custom_input_wrap_without_label_dark' : ''} select_custom_input_wrap_without_label_transparent select_custom_input_wrap select_custom_input_wrap_without_label_dark_small_gap_img  `}>

                    <Select value={"Rus"} className="select_custom_input  " variant='standard'
                        menuProps={{
                            className: 'w-full p-1 '
                        }}

                    >
                        <Option value={'Rus'} className='text-ls'>
                            <div>
                                <img className='rounded-[5px] w-[35px] md:w-[38px]' src="/images/flag1.png" alt="" />

                            </div>
                        </Option>
                        <Option value={'Eng'} className='text-ls'>
                            <div>
                                <img className='rounded-[5px] w-[35px] md:w-[38px]' src="/images/red-flag.png" alt="" /></div>
                        </Option>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default FlagSelect;