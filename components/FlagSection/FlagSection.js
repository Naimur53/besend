import Image from 'next/image';
import React from 'react';

const FlagSection = () => {
    const data = [
        'Австрия',
        'Бельгия',
        'Болгария',
        'Венгрия',
        'Германия',
        'Греция',
        'Дания',
        'Ирландия',
        'Испания',
        'Италия',
        'Кипр',
        'Латвия',
        'Литва',
        'Люксембург',
        'Мальта',
        'Нидерланды',
        'Польша',
        'Потругалия',
        'Россия',
        'Румыния',
        'Словакия',
        'Словения',
        'Украина',
        'Финляндия',
        'Франция',
        'Хорватия',
        'Чехия',
        'Швеция',
        'Эстония',
    ]
    return (
        <div id='Возможности' className='pt-[100px] pb-[80px] md:pb-[120px] bg-white'>
            <div className="container">
                <div className="text-center mb-[36px]">
                    <h2 className='text-[12px] md:text-[15px] text-[#64748B] leading-[18px] mb-[12px]'>Возможности</h2>
                    <h1 className='text-normal md:text-base'>Можно перевести и отправить в 29 стран</h1>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 '>
                    <div>
                        {
                            data.slice(0, 8).map((single, i) => <div className='mb-[26px]' key={i}>
                                <div className='inline-block mr-[8px]'>
                                    <Image className='rounded-[3px]' src={`/images/icons/c-${(i + 1)}.png`} width={20} height={16} alt='flag'></Image>
                                </div>
                                <span>{single}</span>
                            </div>)
                        }
                    </div>
                    <div>
                        {
                            data.slice(8, 16).map((single, i) => <div className='mb-[26px]' key={i}>
                                <div className='inline-block mr-[8px]'>
                                    <Image className='rounded-[3px]' src={`/images/icons/c-${(i + 1) + 8}.png`} width={20} height={16} alt='flag'></Image>
                                </div>
                                <span>{single}</span>
                            </div>)
                        }
                    </div>
                    <div>
                        {
                            data.slice(16, 24).map((single, i) => <div className='mb-[26px]' key={i}>
                                <div className='inline-block mr-[8px]'>
                                    <Image className='rounded-[3px]' src={`/images/icons/c-${(i + 17)}.png`} width={20} height={16} alt='flag'></Image>
                                </div>
                                <span>{single}</span>
                            </div>)
                        }
                    </div>
                    <div>
                        {
                            data.slice(24, 32).map((single, i) => <div className='mb-[26px]' key={i}>
                                <div className='inline-block mr-[8px]'>
                                    <Image className='rounded-[3px]' src={`/images/icons/c-${(i + 25)}.png`} width={20} height={16} alt='flag'></Image>
                                </div>
                                <span>{single}</span>
                            </div>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FlagSection;