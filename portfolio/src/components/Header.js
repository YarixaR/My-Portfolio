import React from "react"
import image from '../assets/image.jpg'
import wallpaper from '../assets/wallpaper.webp'

function Header() {
    return(
        <div>
            <section id="about" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

                <div className=" md:order-2 flex justify-ceneter basis-3/5 z-10 mt-16 md:mt-32">
                    <img className="inline-block h-80 w-60 rounded-full overflow-hidden ring-2 ring-white" src={image} alt='image'/>
                </div>
            
            <h1 >About Yarixa</h1>
            <p >Hi! I'm Yari, and I'd love to share a few things to get to know me a little more. I have a passion for animals, cooking, drinking matcha and coffee, playing video games, and traveling. This year, I've decided to embark on a new journey and strive to make a career change. I've dedicated numerous years healing and nourishing animals to facilitate people's lives but now I'm excited to start focusing on my creative side by ideating solutions, sketching them out, and bringing them to life.  
            </p>
            </section>
        </div>
    )
}
export default Header;


{/* <div className=" text-center container mx-auto py-20 flex gap-20 ">
<section id="about">
    <div>
        <img className="inline-block h-80 w-60 rounded-full overflow-hidden ring-2 ring-white" src={image}/>
    </div>

<h1 >About Yarixa</h1>
<p >Hi! I'm Yari, and I'd love to share a few things to get to know me a little more. I have a passion for animals, cooking, drinking matcha and coffee, playing video games, and traveling. This year, I've decided to embark on a new journey and strive to make a career change. I've dedicated numerous years healing and nourishing animals to facilitate people's lives but now I'm excited to start focusing on my creative side by ideating solutions, sketching them out, and bringing them to life.  
</p>
</section>
</div> */}