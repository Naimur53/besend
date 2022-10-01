import { Select, Option } from "@material-tailwind/react";
import Image from "next/dist/client/image";

const HomeInputs = () => {
    return (
        <div>
            <form >
                <div class="bg-[#E7EAEE]  rounded-lg grid  grid-cols-2 ">
                    <div class="inline-flex rounded-lg">
                        <input className="custom_radio w-full" type="radio" name="room_type" id="roomPrivate" checked hidden />
                        <label for="roomPrivate" class="radio_custom_input">Отправить</label>
                    </div>
                    <div class="inline-flex rounded-lg">
                        <input className="custom_radio w-full" type="radio" name="room_type" id="roomPublic" hidden />
                        <label for="roomPublic" class="radio_custom_input">Получить</label>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <div className="select_custom_input_wrap">
                        <Select color="green" size="lg" variant="standard" label="Отправляю из" className="select_custom_input">
                            <Option>
                                <div className="flex items-center">
                                    <div>
                                        <Image className="rounded-md" src="/images/flag1.png" width={38} height={28} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">России</p>
                                </div>
                            </Option>
                            <Option>
                                <div className="flex items-center">
                                    <div>
                                        <Image className="rounded-md" src="/images/flag1.png" width={38} height={28} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">Second</p>
                                </div>
                            </Option>
                            <Option>
                                <div className="flex items-center">
                                    <div>
                                        <Image className="rounded-md" src="/images/flag1.png" width={38} height={28} alt="flag" />
                                    </div>
                                    <p className="ml-[7px] text-sm text-black">Another</p>
                                </div>
                            </Option>
                        </Select>

                    </div>
                </div>
            </form>
        </div >
    );
};

export default HomeInputs;