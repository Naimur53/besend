import React from 'react';
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const CustomAccrodian = ({ children, heading, defaultValue }) => {
    const [open, setOpen] = useState(defaultValue || false);

    const handleOpen = (value) => {
        setOpen(value);
    };
    return (
        <div>
            <div className='flex gap-[10px] items-center' onClick={() => handleOpen(!open)}>
                <h2 className='text-[18px] leading-[22px] text-[#30B68D] text-normal'>{heading}</h2>

                <img className={!open ? "rotate-0" : 'rotate-180'} src="/images/down-small-green.png" alt="" />
            </div>
            {
                open ? <div className='pt-[19px]'>
                    {children}
                </div> : <></>
            }

        </div>
    );
};

export default CustomAccrodian;