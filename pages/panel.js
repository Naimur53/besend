
import MainHead from '../components/MainHead/MainHead';
import PanelMain from '../components/PanelMain/PanelMain';
import SideBar from '../components/SideBar/SideBar';

const panel = () => {
    return (
        <div>
            <MainHead></MainHead>
            <div className='flex bg-white'>
                <div className="bg-main-white w-[312px] h-screen">
                    <SideBar></SideBar>
                </div>
                <div className='w-[calc(100%-312px)]'>
                    <PanelMain></PanelMain>
                </div>

            </div>
        </div>
    );
};

export default panel;