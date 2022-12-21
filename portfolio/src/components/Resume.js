import React from "react"
import resume from '../assets/resume.pdf'

function Resume() {
    return(
        <div className="text-center pb-10 pt-10 ">
            <section id='resume'>
                <h1 className="mb-5">My Resume</h1>
                <a href={ resume } className="relative overflow-hidden rounded-sm shadow-md shadow-gray-400/50 bg-gradient-to-r from-indigo-400 to-cyan-400 py-3 px-5 text-lg font-medium uppercase tracking-wider text-gray-50 ">Download</a>

            </section>
        </div>
    )
}
export default Resume;