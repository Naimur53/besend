

const panelOption = () => {
    return (
        <div>
            <ul className='sidebar_option pt-[49px]'>
                <li className="active">
                    <div className='option_icon'>
                        <img src="/images/option/home.png" alt="icons" />
                    </div>
                    <span>Главная</span>
                </li>
                <li>
                    <div className='option_icon'>
                        <img src="/images/option/card.png" alt="icons" />

                    </div>
                    <span>Способы оплаты</span>
                </li>
                <li>
                    <div className='option_icon'>
                        <img src="/images/option/users.png" alt="icons" />

                    </div>
                    <span>Получатели</span>
                </li>
                <li className="pt-[60px]">
                    <div className='option_icon'>
                        <img src="/images/option/gear.png" alt="icons" />

                    </div>
                    <span>Настройки</span>
                </li>
            </ul>
        </div>
    );
};

export default panelOption;