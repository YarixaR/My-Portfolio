import React from "react"
import image from '../assets/image.jpg'
import useMediaQuery from "../hooks/useMediaQuery"

function Header() {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <div>
            <section id="about" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

                <div className=" md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-10 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img className="hover:filter hover:saturate-150 transition duration-500 z-10 w-80 rounded-t-[400px]  max-w-[400px] md:max-w-[600px] " src={image} alt='profile'/>
                        </div>
                    ) : (
                        <img className="hover:filter hover:saturate-150 transition duration-500 z-10 w-80 rounded-full max-w-[400px] md:max-w-[600px]" src={image} alt='profile'/>
                    )}
                </div>
                    <div className="z-30 basis-2/5 mt-12 md:mt-32 text-center ml-20">
                    <h1 >About Yarixa</h1>
                        <p >Hi! I'm Yari, and I'd love to share a few things to get to know me a little more. I have a passion for animals, cooking, drinking matcha and coffee, playing video games, and traveling. This year, I've decided to embark on a new journey and strive to make a career change. I've dedicated numerous years healing and nourishing animals to facilitate people's lives but now I'm excited to start focusing on my creative side by ideating solutions, sketching them out, and bringing them to life.  
                        </p>
                    </div>
            </section>
        </div>
    )
}
export default Header;



