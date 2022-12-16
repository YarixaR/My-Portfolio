import React from "react"
import { FaLinkedin } from 'react-icons/fa'
import taro from '../assets/taro.jpg'



function Contact() {
    return(
        <div className="bg-orange-50 text-center pt-10 pb-10 flex justify-center ">
            <section id='contact'>
                <img src={taro} alt='taro the cat' className="w-40 h-50 ml-12 rounded-full"/>
                <h1>Contact Me</h1>
                <p>
                    <a href="mailto:yarixarodriguez94@gmail.com">Yarixarodriguez94@gmail.com</a>
                </p>
                <p className="flex justify-center text-2xl ">
                    <a href="https://www.linkedin.com/in/yarixa-rodriguez/"><FaLinkedin/></a>
                </p>

            </section>
        </div>
    )
}
export default Contact;