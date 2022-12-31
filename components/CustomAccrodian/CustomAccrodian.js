import React from 'react';
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const CustomAccrodian = ({ children, heading }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = (value) => {
        setOpen(value);
    };
    return (
        <div>
            <div >
                <div onClick={() => handleOpen(!open)}>
                    <h2 className='text-[18px] leading-[22px] text-[#30B68D] text-normal'>{heading}</h2>

                </div>
                {
                    open ? <div>
                        {children}
                    </div> : <></>
                }

            </div>
        </div>
    );
};

export default CustomAccrodian;