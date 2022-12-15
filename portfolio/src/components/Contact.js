import React from "react"
import { FaLinkedin } from 'react-icons/fa'


function Contact() {
    return(
        <div className="bg-orange-50 text-center">
            <section>
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