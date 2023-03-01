import React from "react"
import project from '../assets/project2.mov'
import projects from '../assets/project5.mov'
import otherProject from '../assets/project4.mov'
import { FaGithub } from 'react-icons/fa'

function Projects() {

    const project1 = [ 'Rapid Api', 'Ruby on Rails', 'React', 'React Router', 'Postman', 'Figma', 'Material UI' ]

    const listFirst = project1.map((p1 => 
        <p><span>✓</span>{ p1 }</p>
        ))

    const project2 = [ 'Ruby on Rails', 'React', 'Postman', 'Figma', 'Tailwind CSS' ]

    const listSecond = project2.map((p2 => 
        <p><span>✓</span>{ p2 }</p>
        ))

    const project3 = [ 'Ruby', 'React', 'SQLlite', 'Postman', 'Figma', 'Material UI' ]

    const listThird = project3.map((p3 => 
        <p><span>✓</span>{ p3 }</p>
        ))

    return(
        <div className="text-center pb-10 pt-10">
            <section id='projects'>
                <h1 className="text-blue-600">Academic Projects</h1>
                <br></br>
                <h2 className="text-blue-600 mb-10">Hover To Play DEMO</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 px-1 sm:px-o">
                    <video src={project} onMouseOver={ e => e.target.play() } onMouseOut={ e => e.target.pause() } className="shadow-md shadow-gray-600 rounded-lg"/>
                    <div className="mt-10">
                        <h2><strong>Go-Fitness</strong></h2>
                        <p>A fitness app a user can log workouts to set a routine. The user is able to create an account, log a workout, edit, and remove. </p>
                        <h2 className="mt-5"><strong>Skills/Tools:</strong></h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o mb-10 ">
                            { listFirst }
                        </div>
                        <a className="flex justify-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" href='https://github.com/YarixaR/Go-Fitness'><FaGithub className="text-cyan-500 text-2xl w-10 h-10"/></a>
                    </div>
                    <video src={projects} onMouseOver={ e => e.target.play() } onMouseOut={ e => e.target.pause() } className="shadow-md shadow-gray-600 rounded-lg"/>
                    <div className="mt-10">
                        <h2><strong>Netflat</strong></h2>
                        <p>An app that displays a list of movies to rate and watch a preview. The user can log in and out of their account. Create, update, and delete a review.</p>
                        <p>Inspired by Netflix.</p>
                        <h2 className="mt-5"><strong>Skills/Tools:</strong></h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gapDEMO-2 px-10 sm:px-o mb-10">
                        { listSecond }
                        </div>
                        <a className="flex justify-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" href='https://github.com/YarixaR/NetFl'><FaGithub className="text-cyan-500 text-2xl w-10 h-10"/></a>
                    </div>
                        <video src={otherProject} onMouseOver={ e => e.target.play() } onMouseOut={ e => e.target.pause() } className="shadow-md shadow-gray-600 rounded-lg"/>
                    <div className="mt-10">
                          <h2><strong>Task Master</strong></h2>
                          <p>A user-friendly to-do list app. The user is able to add, edit, delete, and search for notes. Each note has a custom theme.</p>
                          <p>Inspired by Google Keep.</p>
                          <h2 className="mt-5"><strong>Skills/Tools:</strong></h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o mb-10">
                        { listThird }
                        </div>
                        <div className="flex justify-center">
                            <a href='https://github.com/YarixaR/phase-3-sinatra-react-project'><FaGithub className="text-cyan-500 text-2xl w-10 h-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"/>server</a>
                            <a href='https://github.com/YarixaR/task-master'><FaGithub className="text-cyan-500 text-2xl w-10 h-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"/>client</a>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Projects;