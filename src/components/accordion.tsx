import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface AccordionItem {
    title: string;
    details: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{color: '#212322', padding: '0px' }}>
            {items.map((item, index) => (
                <div key={index} style={{ marginBottom: '0px' }}>
                    <hr className='text-[#898989] mb-4 mt-4'/>
                    <div
                        onClick={() => handleToggle(index)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            padding: '10px',
                            backgroundColor: '#F7F6F3',
                            borderRadius: '5px',
                        }}
                    >
                        <span className='text-[18px] font-semibold'>{item.title}</span>
                        <motion.div
                            initial={false}
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                        </motion.div>
                    </div>
                    <motion.div
                        initial={false}
                        animate={{ height: activeIndex === index ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', padding: activeIndex === index ? '10px' : '0 10px' }}
                    >
                        {activeIndex === index && (
                            <div style={{ backgroundColor: '#F7F6F3', borderRadius: '5px', padding: '10px' }}>
                                {item.details}
                            </div>
                        )}
                    </motion.div>
                    {/* <hr className='text-[#898989] mt-4'/> */}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
