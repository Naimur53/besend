import { Select, Option } from '@material-tailwind/react';
import Image from 'next/image';
import { useState } from 'react';

const DropdownSelect = ({ children, label, defaultValue }) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className={`${label ? 'select_custom_input_wrap' : 'select_custom_input_wrap_without_label'}`}>
            <Select color="green" value={value} size="lg" variant="standard" label={label}
                labelProps={{ className: `${label ? "peer-focus:text-[12px] peer-placeholder-shown:leading-[4] peer-focus:leading-[4] leading-[4] left-[12px]" : 'hidden !leading-[0] left-[12px]'}` }}

                className="select_custom_input"  >
                {children}
            </Select>
        </div>
    );
};

export default DropdownSelect;