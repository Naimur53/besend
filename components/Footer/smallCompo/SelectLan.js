import React from 'react';
import { Select, Option } from "@material-tailwind/react";
import Image from 'next/future/image';

const SelectLan = ({ dark }) => {
    // const [value, setValue] = useState(defaultValue);
    return (
        <div className='flex justify-center items-center '>
            <div>
                {
                    dark ? <img quality={100} src='/images/dark-world.svg' layout='raw' className='min-w-[16px] w-[16px]' width={700} height={400} alt='icon world'></img> : <img quality={100} src='/images/white-world.svg' layout='raw' className='min-w-[16px] w-[16px]' width={700} height={400} alt='icon world'></img>
                }
            </div>
            <div className={`${dark ? 'select_custom_input_wrap_without_label_dark' : ''} select_custom_input_wrap_without_label_transparent select_custom_input_wrap`}>

                <Select value={"Rus"} className="select_custom_input  " variant='standard'
                    menuProps={{
                        className: 'w-full p-1 '
                    }}

                >
                    <Option value='Rus' className='text-ls'>Rus</Option>
                    <Option value='Eng' className='text-ls'>Eng</Option>
                </Select>
            </div>
        </div>
    );
};

export default SelectLan;