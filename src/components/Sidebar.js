import Month from './Month';
import ArrowButton from './ArrowButton';

import Create from '../assets/images/create.svg';

const SideBar = () => {
    return (
        <div className='p-4'>
            <div className='mb-5'>
                <button className='w-36 h-12 border rounded-3xl flex justify-between items-center px-8 shadow-md'>
                    <img src={Create} />
                    Create
                </button>
            </div>
            <div className='relative'>
                <div className='absolute flex justify-between w-1/4 right-0'>
                    <ArrowButton direction="right" size={24} />
                    <ArrowButton direction="left" size={24} />
                </div>
                <Month month='August' days='31' year='2024' />
            </div>
        </div>
    )
}

export default SideBar;