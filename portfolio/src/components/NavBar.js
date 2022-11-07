import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react"

function NavBar() {

    const [ nav, setNav ] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='q-full h-[90px] bg-black'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-white'>navbar</h1>
            </div>
            <div className='flex text-white items-center'>
                <ul>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>

            {/* Hamburger menu */}

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
            </div>
            </div>
           
        </div>
    )
}

export default NavBar;