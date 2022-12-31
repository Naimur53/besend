import Link from "next/link";
import SelectLan from "../Footer/smallCompo/SelectLan";

;
import PanelOption from '../PanelOption/PanelOption'

const SideBar = () => {
    return (
        <div className="h-full flex flex-col justify-between ">
            {/* top */}
            <div>
                <div className="
            flex justify-between px-[35px] pt-[25px]">
                    <Link href='/'>
                        <img className='min-w-[105px] w-[105px] cursor-pointer' width={700} height={80} alt='logo' layout='raw' src='/images/logo.svg'></img>
                    </Link>
                    <SelectLan small dark></SelectLan>
                </div>
                <div className="px-[30px] pt-[45px]">
                    <button className="panel_button ">Перевести деньги</button>
                </div>
                {/* option */}

                <PanelOption></PanelOption>

            </div>
            {/* bottom */}
            <div className="px-[30px]">
                <hr className="border-[#E7EAEE]" />
                <div className="pt-[30px] text-ls font-normal ">
                    <h3 className="pb-[20px]">Ответы на вопросы</h3>
                    <h3>Оставить отзыв</h3>
                </div>
                <div className="pt-[74px] pb-[32px]">
                    <button className="panel_button gray">Сообщить о проблеме</button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;