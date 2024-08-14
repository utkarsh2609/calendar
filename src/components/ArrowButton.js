import arrow from '../assets/images/arrow.svg';

const ArrowButton = ({ direction, size }) => {
    const arrowStyles = {
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const arrowIcon = {
        width: '100%',
        height: '100%',
        transform: direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)',
    };

    return (
        <button style={arrowStyles}>
            <img src={arrow} alt="arrow image" style={arrowIcon} />
        </button>
    )
}

export default ArrowButton;