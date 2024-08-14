import hamburger from '../assets/images/hamburger.svg'

const Header = () => {
    return (
        <div className="h-16 border-b border-slate-200 flex justify-between items-center">
            <div className='flex'>
                <div className='w-10'>
                    <img src={hamburger} alt="hamburger" />
                </div>
                <div className='w-10' >
                    <img src={'https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_'+new Date().getDate()+'_2x.png'} />
                </div>
                Realendar
            </div>
            <div></div>
            <div>
                <div className='relative h-12 w-12 rounded-full bg-purple-400 text-white cursor-pointer'>
                    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-medium'>U</span>
                </div>
                {/* <span className="h-12 w-12 bg-purple-400 text-white rounded-full">U</span> */}
            </div>
        </div>
    )
}

export default Header;