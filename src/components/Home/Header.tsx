import img from '@/assets/header.png'

const Header = () => {
    return (
        <div>
            <div className='md:h-[768px] bg-contain bg-current flex justify-center pt-40'
            style={{ backgroundImage: `url(${img})` }}
            >
            
            </div>
        </div>
    );
};

export default Header;