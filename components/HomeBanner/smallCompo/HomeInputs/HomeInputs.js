import { Select, Option, Input } from "@material-tailwind/react";
import Image from "next/future/image";
import DropdownSelect from "../DropdownSelect/DropdownSelect";

const HomeInputs = () => {
    return (
        <div>

            <form >
                <div class="bg-[#E7EAEE]  rounded-[12px] grid  grid-cols-2 ">
                    <div class="inline-flex rounded-[12px]">
                        <input className="custom_radio w-full" type="radio" name="a" id="roomPrivate" defaultChecked hidden />
                        <label for="roomPrivate" class="radio_custom_input">Отправить</label>
                    </div>
                    <div class="inline-flex rounded-[12px]">
                        <input className="custom_radio w-full" type="radio" name="a" id="roomPublic" hidden />
                        <label for="roomPublic" class="radio_custom_input">Получить</label>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <div className="select_custom_input_wrap">
                        <DropdownSelect defaultValue='More 2' label='Отправляю из'>
                            <Option className='list-none' value={'России'}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag1.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">России</p>
                                </div>
                            </Option>
                            <Option className='list-none' value={"More"}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag1.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More</p>
                                </div>
                            </Option>
                            <Option selected className='list-none' value="More 2" >
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag1.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More 2</p>
                                </div>
                            </Option>
                            <Option selected className='list-none' value={0}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag1.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More</p>
                                </div>
                            </Option>

                        </DropdownSelect>

                    </div>
                </div>
                {/* cymmy input */}
                <div className="flex justify-between h-[70px] rounded-[16px] p-[12px] bg-white mt-[12px]">
                    <div className="input_wrap h-full w-full ">
                        <Input defaultValue={"3 000"} labelProps={{ className: 'text-sm peer-focus:text-[12px] peer-placeholder-shown:leading-[3] peer-focus:leading-[0] leading-[3]' }} color="green" variant="standard" label="Сумму" />
                    </div>
                    <div className="flex justify-center items-center border-[#E7EAEE] border-l text-sm px-[16px] py-[21px]">RUB</div>
                </div>
                {/* second drop down */}
                <div className="mt-[12px]">
                    <div className="select_custom_input_wrap">
                        <DropdownSelect defaultValue='Украину' label='Отправляю в'>
                            <Option className='list-none' value={'Украину'}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">Украину</p>
                                </div>
                            </Option>
                            <Option className='list-none' value={"More"}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More</p>
                                </div>
                            </Option>
                            <Option selected className='list-none' value="More 2" >
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More 2</p>
                                </div>
                            </Option>
                            <Option selected className='list-none' value={0}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More</p>
                                </div>
                            </Option>

                        </DropdownSelect>

                    </div>
                </div>
                {/* third */}
                <div className="mt-[12px]">
                    <div className="select_custom_input_wrap">
                        <DropdownSelect label='Способ оплаты'>
                            <Option className='list-none' value={'Украину'}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">Украину</p>
                                </div>
                            </Option>
                            <Option className='list-none' value={"More"}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More</p>
                                </div>
                            </Option>
                            <Option selected className='list-none' value="More 2" >
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More 2</p>
                                </div>
                            </Option>
                            <Option selected className='list-none' value={0}>
                                <div className="flex items-center  ">
                                    <div>
                                        <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">More</p>
                                </div>
                            </Option>

                        </DropdownSelect>

                    </div>
                </div>
                <div className="flex justify-between items-center mt-[22px]  mb-[10px]   px-4">
                    <p className="font-semibold text-ls md:text-sm">
                        Итого
                    </p>
                    <div className="flex gap-[10px] items-center">
                        <Image quality={100} layout='raw' src="/images/clock.png" width={100} height={100} className='w-[20px] max-w-[20px]' alt="clock" />
                        <p className="text-[#64748B] text-[14px] md:text-ls">Цена обновится через 4:57</p>
                    </div>
                </div>
                <div>
                    <DropdownSelect defaultValue='More 2'  >
                        <Option className='list-none' value={'России'}>
                            <div className="flex items-center  ">
                                <div>
                                    <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                </div>
                                <p className="ml-[7px] text-sm text-black">России</p>
                            </div>
                        </Option>
                        <Option className='list-none' value={"More"}>
                            <div className="flex items-center  ">
                                <div>
                                    <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                </div>
                                <p className="ml-[7px] text-sm text-black">More</p>
                            </div>
                        </Option>
                        <Option className='list-none' value="More 2" >
                            <div className="flex items-center  ">
                                <p className="text-ls">
                                    Получатель получит
                                    <span className="ml-[7px] text-sm text-black text-semibold ">
                                        ~1 600 ₴
                                    </span>
                                </p>
                            </div>
                        </Option>
                        <Option className='list-none' value={'more'}>
                            <div className="flex items-center  ">
                                <div>
                                    <Image quality={100} className="w-[38px] max-w-[38px] rounded-md" src="/images/flag2.png" layout="raw" width={100} height={100} alt="flag" />
                                </div>
                                <p className="ml-[7px] text-sm text-black">More</p>
                            </div>
                        </Option>

                    </DropdownSelect>
                </div>
                <button type="submit" className="py-[20px] px-[32px] bg-[#8BD7C0] w-full rounded-[16px] mt-[12px]">
                    <div className="flex justify-center items-center gap-[12px]">
                        <p className="text-[#F3F5F6] text-normal font-semibold">Перевести</p>
                        <Image quality={100} className="w-[15px] max-w-[15px]" src='/images/rightArrow.png' width={80} height={80} alt='arrow'></Image>
                    </div>
                </button>
            </form>
        </div >
    );
};

export default HomeInputs;