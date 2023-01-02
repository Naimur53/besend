
import MainHead from '../components/MainHead/MainHead';
import PanelMain from '../components/PanelMain/PanelMain';
import SideBar from '../components/SideBar/SideBar';

const Panel = () => {
    return (
        <div>
            <MainHead></MainHead>
            <div className='flex bg-white'>
                <div className="bg-main-white w-[312px] hidden md:block h-screen fixed top-0 bottom-0">
                    <SideBar></SideBar>
                </div>
                <div className='w-full md:w-[calc(100%-312px)] ml-0 md:ml-[312px]'>
                    <PanelMain></PanelMain>
                </div>

            </div>
        </div>
    );
};

export default Panel;