import Image from "next/future/image";
import HomeInputs from "./smallCompo/HomeInputs/HomeInputs";
const HomeBanner = () => {
    return (
        <div className="mt-[100px] md:mt-[152px]">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-4 ">
                    <div className="col-span-4">
                        <h1 className="font-extrabold text-[32px] leading-[38px] md:text-xl mb-[16px]">
                            Переводы заграницу <br /> без препятствий
                        </h1>
                        <p className="text-ls md:text-sm font-normal ">
                            Совершайте переводы в 123 страны и получайте деньги <br className="md:block hidden" /> в  течение всего 2 часов с момента отправки
                        </p>
                        <p className="text-sm font-bold font-Roboto hidden md:block mt-[60px] mb-2">
                            Excellent 4.8
                            <span className="font-normal"> out of 5 </span>
                            <span><Image quality={100} className='inline-block max-w-[14px] rounded-[3px]' layout='raw' src='/images/shape.svg' width={90} height={50} alt='star'></Image></span>
                            Trustpilot
                        </p>
                    </div>
                    <div className="col-span-3 md:mt-0 mt-[40px] ">
                        <HomeInputs></HomeInputs>
                        <p className="text-ls font-bold text-center font-Roboto md:hidden block mt-[40px] mb-2">
                            Excellent 4.8
                            <span className="font-normal  font-Roboto mr-[13px]"> out of 5</span>
                            <span><Image className="inline-block max-w-[14px] w-[14px]" layout='raw' quality={100} src='/images/shape.svg' width={80} height={80} alt='star'></Image></span>
                            <span className="ml-[4px] font-bold">Trustpilot</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;