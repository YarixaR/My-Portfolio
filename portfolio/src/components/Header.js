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
                        <div className="relative z-0 ml-60 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img className="hover:filter hover:saturate-150 transition duration-500 z-10 w-80 rounded-t-[400px]  max-w-[400px] md:max-w-[600px] " src={image} alt='profile'/>
                        </div>
                    ) : (
                        <img className="hover:filter hover:saturate-150 transition duration-500 z-10 w-80 rounded-full max-w-[400px] md:max-w-[600px]" src={image} alt='profile'/>
                    )}
                </div>
                    <div className="z-30 basis-2/5 mt-12 md:mt-32 md:ml-10  ">
                    <h1 >Hi, I'm Yari.</h1>
                        <h2>Last year, I've decided to embark on a new journey and strive to make a career change. I've dedicated numerous years healing and nourishing animals to facilitate their lives but now I'm excited to start focusing on my creative side by ideating solutions, sketching them out, and bringing them to life.</h2>
                        <br></br>
                        <h3>When I'm not working, you can find me:</h3>
                        <h4>
                            <ul>
                                <li> Cooking </li>
                                <li> Drinking Coffee </li>
                                <li> Playing video games </li>
                                <li> Traveling </li>
                                <li> Hanging around with my cat </li>
                            </ul>
                        </h4>
                    </div>
            </section>
        </div>
    )
}
export default Header;



