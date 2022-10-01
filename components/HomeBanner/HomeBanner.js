import Image from "next/dist/client/image";
import HomeInputs from "./smallCompo/HomeInputs/HomeInputs";
const HomeBanner = () => {
    return (
        <div className="mt-[80px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 ">
                    <div className="col-span-4">
                        <h1 className="font-extrabold text-xl mb-[16px]">
                            Переводы заграницу <br /> без препятствий
                        </h1>
                        <p className="text-sm font-normal mb-[60px]">
                            Совершайте переводы в 123 страны и получайте деньги <br /> в  течение всего 2 часов с момента отправки
                        </p>
                        <p className="text-sm font-bold font-Roboto mb-2">
                            Excellent 4.8
                            <span className="font-normal"> out of 5 </span>
                            <span><Image src='/images/shape.png' width={14} height={13} alt='star'></Image></span>
                            Trustpilot
                        </p>
                    </div>
                    <div className="col-span-3 ">
                        <HomeInputs></HomeInputs>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;