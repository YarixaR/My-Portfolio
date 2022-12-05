import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react"

function NavBar() {

    const [ nav, setNav ] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='q-full h-[90px] '>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-black'>Yarixa Rodriguez</h1>
                <h3 className='text-black'>Software Engineer / Full-Stack</h3>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-black items-center'>
                    <li>About Me</li>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <li>Resume</li>
                    <li>Contact Me</li>
                </ul>
            </div>

            {/* Hamburger menu */}

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-black' /> : <AiOutlineMenu size={30} className='text-black' />}
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-o flex justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            </div>
           
        </div>
    )
}

export default NavBar;