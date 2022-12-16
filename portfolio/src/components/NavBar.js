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
                <h1>Yarixa Rodriguez</h1>
                <h3>Software Engineer / Full-Stack</h3>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex items-center'>
                    <a href='about'>About Me</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#resume'>Resume</a>
                    <a href='#contact'>Contact Me</a>
                </ul>
            </div>

            {/* Hamburger menu */}

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'w-full bg-black text-white absolute z-[100] top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                    <li><a href='about'>About Me</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                </ul>
            </div>
            </div>
           
        </div>
    )
}

export default NavBar;



{/* <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}> */}