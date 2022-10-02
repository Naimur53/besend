import { useState, useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Image from 'next/future/image';
import SelectLan from '../Footer/smallCompo/SelectLan';

const Topbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const data = [
        { name: 'Как это работает', link: '#Как-это-работает' },
        { name: 'Безопасность', link: '#Безопасность' },
        { name: 'Возможности', link: '#Возможности' },
        { name: 'FAQ', link: '#FAQ' },
        { name: 'Отзывы', link: '#Отзывы' },
    ]
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[24px]">
            {
                data.map(single => <li className='list-item font-medium hover:text-[#8BD7C0] transition-all' key={single.link}>
                    <a className='text-ls' href={single.link}>
                        {single.name}
                    </a>


                </li>)
            }
        </ul>
    );
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    return (
        <div>
            <Navbar shadow={false} blurred={false} fullWidth={true} className="w-full fixed top-0 z-50 py-[17px] lg:px-8 lg:py-4  bg-[#F3F4F5] border-b border-[#E7EAEE]">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <div>
                        <Image className='min-w-[116px]' width={116} height={32} alt='logo' layout='raw' src='/images/logo.png'></Image>
                    </div>

                    <div className="hidden lg:block px-3">{navList}</div>
                    <div className='hidden lg:flex'>
                        <div className='mr-[65px]'>
                            <SelectLan dark={true}></SelectLan>

                        </div>
                        <button className='py-[10] px-[20px] bg-[#E7EAEE] rounded-[10px] text-medium text-ls '>Войти</button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className='text-black flex justify-center items-center flex-col mt-3 text-center'>
                        {navList}
                        <div className='flex'>
                            <SelectLan dark={true}></SelectLan>
                            <button className='py-[10] ml-[60px] px-[20px] bg-[#E7EAEE] rounded-[10px] text-medium text-ls'>Войти</button>
                        </div>
                    </div>

                </MobileNav>
            </Navbar>
        </div>
    );
};

export default Topbar;