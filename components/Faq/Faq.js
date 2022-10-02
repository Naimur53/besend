import Image from 'next/image';
import { useEffect, useState } from 'react';
import FaqSingleAccordion from './smallComp/FaqSingleAccordion';

const Faq = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    useEffect(() => {
        setOpen(1)
    }, [])
    return (
        <div id='FAQ' className="md:pt-[220px] pt-[200px]">
            <div className='bg-main-black rounded-[32px] pt-[40px] px-[28px] pb-[28px] md:pb-[34px]'>
                <div className='text-center mb-[36px]'>
                    <h2 className='text mb-[12px] text-[12px] md:text-[15px] leading-[18px] text-[#B8C0CC]'>FAQ</h2>
                    <h1 className='text-normal md:text-base text-white '>Часто-задаваемые вопросы</h1>
                </div>
                <div>
                    {
                        [1, 2, 3, 4].map(single => <FaqSingleAccordion
                            heading='One-line question'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio eleifend viverra porttitor ullamcorper id.'
                            open={open} num={single} key={single} handleOpen={handleOpen}></FaqSingleAccordion>)
                    }

                </div>
                <div className='md:flex justify-center mt-[42px] items-center'>
                    <p className='text-sm text-[#E7EAEE]  mr-[11px]'>Если у вас остались вопросы, </p>
                    <a href='#' className='block text-sm md:inline-block text-[#36CFA1]'>задайте свой <Image width={12} height={12} alt='arrow' src="/images/greenarrow.png" /> </a>
                </div>

            </div>
        </div>
    );
};

export default Faq;