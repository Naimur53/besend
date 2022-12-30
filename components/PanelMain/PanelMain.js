import React from 'react';
import PanelSlide from '../PanelSlide/PanelSlide';
import PanelTopBar from './smallCompo/PanelTopBar';

const PanelMain = () => {
    return (
        <div>
            <PanelTopBar></PanelTopBar>
            <PanelSlide></PanelSlide>
        </div>
    );
};

export default PanelMain;