import Image from 'next/future/image';
import React from 'react';
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const SafeStarSection = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }
    const data = [
        {
            heading: `Сотрудничаем только с проверенными партнёрами`,
            content: `Все переводы проходят через партнеров, которых вы увидите на этапе перевода`
        },
        {
            heading: `Сумма перевода блокируетсякак депозит`,
            content: `Перед переводом сумма блокируется на счёте выбранного партнёра в качестве депозита `
        },
        {
            heading: `Не делимся информацией о переводах`,
            content: `Каждый участник сделки знает толькосвою часть перевода`
        },
        {
            heading: `Поможем, если что-то пойдёт не так`,
            content: `Если что-то пойдёт не так,команда поддержки придет на помощь`
        },

    ]
    const Card = ({ heading, content, i }) => {
        return <div className='bg-white  rounded-[16px]   py-[0px]  md:pl-[40px]   pl-[23px] px-[20px] md:p-[20px]'>
            <div className='flex md:items-center gap-[11px] md:gap-[24px]'>
                <div className='mt-[20px] md:mt-0'>
                    <Image quality={100} layout='raw' className='min-w-[21px] min-h-[26px] md:min-h-auto  max-w-[21px] md:min-w-[58px] h-auto' width={200} height={200} src='/images/safecard.svg' alt='safe star'></Image>
                </div>
                <div>
                    <div className='lg:block hidden'>
                        <h1 className='text-sm font-semibold mb-[8px]'>{heading}</h1>
                        <p className='text-ls'>{content}</p>
                    </div>
                    <div className='lg:hidden block'>
                        <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
                            <AccordionHeader className='border-0 pt-[16px] pb-[8px]' onClick={() => handleOpen(i)}>
                                <h1 className='text-left text-ls md:text-sm font-semibold mb-[8px]'>{heading}</h1>
                            </AccordionHeader>
                            <AccordionBody className='p-0'>
                                <p className='text-ls'>{content}</p>
                            </AccordionBody>
                        </Accordion>

                    </div>
                </div>
            </div>

        </div>

    }
    return (
        <div id='Безопасность' className=" pt-[120px] ">
            <div className='bg-main-black rounded-[32px] px-[28px] pb-[28px] pt-[40px]'>
                {/* heading area */}
                <div className='text-center mb-[36px]'>
                    <h3 className='text-[15px] text-[#B8C0CC] leading-[18px]'>Безопасность</h3>
                    <h2 className='text-normal md:text-base text-white mt-[12px]'>Мы знаем, что деньги — важный вопрос</h2>
                    <p className='text-ls md:text-sm text-[#E7EAEE] mt-[4px]'>Несколько слов о том, как мы обеспечиваем безопасность вашего перевода</p>

                </div>
                <div className='grid grid-col-1 lg:grid-cols-2 gap-[20px]'>
                    {
                        data.map((single, i) => <Card key={i} i={i + 1} {...single}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SafeStarSection;