import { motion } from 'framer-motion';
import { SiCodersrank } from "react-icons/si";

function Header() {
    return (
        <motion.div className="bg-nav flex flex-col sm:flex-row">
            <div className='p-4 flex items-center'>
                <SiCodersrank color='white' size={34} />
                <p className='italic p-2 text-xl text-white'>Alejandro Torres Piedra</p>
            </div>
            <div className='p-4 flex flex-col sm:flex-row sm:items-center sm:ml-auto'>
                <p className='cursor-pointer mx-2 my-2 sm:my-0 text-center p-2 w-full sm:w-36 transform rounded-md bg-button capitalize tracking-wide text-white transition-colors duration-300 hover:bg-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>Home</p>
                <p className='cursor-pointer mx-2 my-2 sm:my-0 text-center p-2 w-full sm:w-36 transform rounded-md bg-button capitalize tracking-wide text-white transition-colors duration-300 hover:bg-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>Welcome</p>
                <p className='cursor-pointer mx-2 my-2 sm:my-0 text-center p-2 w-full sm:w-36 transform rounded-md bg-button capitalize tracking-wide text-white transition-colors duration-300 hover:bg-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>Projects</p>
                <p className='cursor-pointer mx-2 my-2 sm:my-0 text-center p-2 w-full sm:w-36 transform rounded-md bg-button capitalize tracking-wide text-white transition-colors duration-300 hover:bg-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>Contact</p>
            </div>
        </motion.div>

    );
}

export default Header;
