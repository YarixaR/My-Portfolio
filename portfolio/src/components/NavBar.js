import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react"
import {Link} from 'react-scroll'

function NavBar() {

    const [ nav, setNav ] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='q-full h-[90px] '>
            <div className='w-[1455px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1>Yarixa Rodriguez</h1>
                <h3>Software Engineer / Front End Focused</h3>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex items-center'>
                    <Link to='about' smooth={true} offset={-100} duration={500} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 '>About Me</Link>
                    <Link to='skills' smooth={true} offset={-200} duration={500} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Skills</Link>
                    <Link to='projects' smooth={true} offset={-10} duration={500} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Projects</Link>
                    <Link to='resume' smooth={true} offset={-200} duration={500} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Resume</Link>
                    <Link to='contact' smooth={true} offset={-200} duration={500} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Contact Me</Link>
                </ul>
            </div>

            {/* Hamburger menu */}

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'w-full bg-black text-white absolute z-[100] top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                    <li><Link to='about' smooth={true} offset={-100} duration={500}>About Me</Link></li>
                    <li><Link to='skills' smooth={true} offset={-200} duration={500}>Skills</Link></li>
                    <li><Link to='projects' smooth={true} offset={-10} duration={500}>Projects</Link></li>
                    <li><Link to='resume' smooth={true} offset={-200} duration={500}>Resume</Link></li>
                    <li><Link to='contact' smooth={true} offset={-200} duration={500}>Contact Me</Link></li>
                </ul>
            </div>
            </div>
           
        </div>
    )
}

export default NavBar;



