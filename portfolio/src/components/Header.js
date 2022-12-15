import React from "react"
import image from '../assets/image.jpg'

function Header() {
    return(
        <div className=" text-center ">
            <img className="inline-block h-35 w-40 rounded-lg ring-2 ring-white" src={image}/>
            <h1 >About Yarixa</h1>
            <p>Hi! I'm Yari, and I'd love to share a few things to get to know me a little more. I have a passion for animals, cooking, drinking matcha and coffee, playing video games, and traveling. This year, I've decided to embark on a new journey and strive to make a career change. I've dedicated numerous years healing and nourishing animals to facilitate people's lives but now I'm excited to start focusing on my creative side by ideating solutions, sketching them out, and bringing them to life.  
            </p>
        </div>
    )
}
export default Header;