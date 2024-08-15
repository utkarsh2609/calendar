import { daysOfWeek } from '../utils/constants';

const Month = (props) => {
    const { month, days, year } = props;
    return (
        <div className='w-56 h-[252px] pt-0 pr-3.5 pb-4 pl-5'>
            <h2 className='text-base font-medium text-gray-500 ml-2 h-8'>{month} {year}</h2>
            <div>
                {
                    daysOfWeek.map((day, index) => (
                        <div key={index} className=' text-gray-600 inline-block relative h-6 w-6 rounded-full'>
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs'>{day.charAt(0)}</span>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    Array.from({ length: days }, (_, index) => index + 1).map((num) => (
                        <div key={num} className=' text-gray-600 inline-block relative h-6 w-6 rounded-full hover:bg-slate-200 cursor-pointer'>
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px]'>{num}</span>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Month;