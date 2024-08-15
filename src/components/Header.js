import hamburger from '../assets/images/hamburger.svg';
import ArrowButton from './ArrowButton';

const Header = () => {
    return (
        <div className="h-16 py-2 px-4 border-b border-slate-200 flex items-center">
            <div className='flex justify-center items-center w-2/12'>
                <div className='w-6 flex justify-center'>
                    <img src={hamburger} alt="hamburger" />
                </div>
                <div className='w-10 ml-4 mr-2' >
                    <img src={'https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_' + new Date().getDate() + '_2x.png'} />
                </div>
                <span className='text-2xl'>Realendar</span>
            </div>
            <div className='w-9/12 flex justify-start'>
                <div className='w-[70px] text-base py-1.5 px-3 border-solid border rounded border-slate-200 text-slate-800'>
                    Today
                </div>
                <div className='flex justify-between items-center px-5 w-1/6'>
                    <div className='flex justify-evenly w-2/3'>
                        <ArrowButton direction="right" size={24} />
                        <ArrowButton direction="left" size={24} />
                    </div>
                    <div className='w-1/3'> {new Date().getFullYear()} </div>
                </div>
            </div>
            <div className='w-1/12 flex justify-end'>
                <div className='relative h-12 w-12 rounded-full bg-purple-400 text-white cursor-pointer'>
                    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-medium'>U</span>
                </div>
            </div>
        </div>
    )
}

export default Header;