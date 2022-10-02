
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const FaqSingleAccordion = ({ open, handleOpen, heading, num, content }) => {


    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                color="white"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }
    return (
        <div>
            <Accordion className="border-b accordion-wrap py-[20px] border-[#64748B]" open={open === num} icon={<Icon id={num} open={open} />}>
                <AccordionHeader className="text-semibold text-white text-sm font-Raleway p-0 hover:text-gray-400 border-0" onClick={() => handleOpen(num)}>
                    {heading}
                </AccordionHeader>
                <AccordionBody className='text-[#E7EAEE] pb-0 text-sm font-normal'>
                    {content}
                </AccordionBody>
            </Accordion>

        </div>
    );
};

export default FaqSingleAccordion;