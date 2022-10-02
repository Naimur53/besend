import Image from "next/dist/client/image";
import HomeInputs from "./smallCompo/HomeInputs/HomeInputs";
const HomeBanner = () => {
    return (
        <div className="mt-[100px] md:mt-[152px]">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 ">
                    <div className="col-span-4">
                        <h1 className="font-extrabold text-xl mb-[16px]">
                            Переводы заграницу <br /> без препятствий
                        </h1>
                        <p className="text-sm font-normal ">
                            Совершайте переводы в 123 страны и получайте деньги <br /> в  течение всего 2 часов с момента отправки
                        </p>
                        <p className="text-sm font-bold font-Roboto hidden md:block mt-[60px] mb-2">
                            Excellent 4.8
                            <span className="font-normal"> out of 5 </span>
                            <span><Image src='/images/shape.png' width={14} height={13} alt='star'></Image></span>
                            Trustpilot
                        </p>
                    </div>
                    <div className="col-span-3 md:mt-0 mt-[40px] ">
                        <HomeInputs></HomeInputs>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;